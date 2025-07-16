import React, { useRef, useState } from "react";
import * as Y from "yjs";
import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST } from "@/env";
import { Typography, TextField, MenuItem, Select, InputLabel, FormControl, Button, Checkbox } from "@mui/material";
import { Accordion, AccordionItem, Avatar } from "@heroui/react";
import { SelectChangeEvent } from "@mui/material";
import SnapshotDrawer from "./SnapshotDrawer";
import { AIContributionDetail } from "@/types";
import { AIContributionMetadata } from "./AIContributionTagging";

interface Props {
  yDoc: Y.Doc;
  roomId: string;
  highlightText?: (index: number, length: number, color: string) => void;
  removeHighlight?: (index: number, length: number) => void;
}

const AIContributionList: React.FC<Props> = ({ yDoc, roomId, highlightText, removeHighlight }) => {
  const [contributions, setContributions] = useState<AIContributionDetail[]>([]);
  const [selectedSnapshot, setSelectedSnapshot] = useState<Uint8Array | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const contribSocket = usePartySocket({
    host: PARTYKIT_HOST,
    room: roomId,
    party: "aicontr",
    onMessage(evt) {
      try {
        const msg = JSON.parse(evt.data);
        if (msg.type === "initial") {
          setContributions(msg.contributions);
        } else if (msg.type === "contribution") {
          const detail: AIContributionDetail = msg.detail;
          setContributions(prev =>
            prev.find(c => c.id === detail.id)
              ? prev.map(c => c.id === detail.id ? detail : c)
              : [...prev, detail]
          );
        }
      } catch (e) {
        console.error("Invalid message format", e);
      }
    },
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFeatureChange = (e: SelectChangeEvent<string>) => {
    setSelectedFeature(e.target.value);
  };

  const uniqueTags = Array.from(new Set(contributions.flatMap(c => c.tags || [])));
  const aiFeatures = Array.from(new Set(contributions.map(c => c.prompt)));

  const toggleSortOrder = () => setSortOrder(o => (o === "asc" ? "desc" : "asc"));

  // Filter and sort
  const filtered = contributions
    .filter(c => {
      const matchesSearch = searchTerm
        ? c.user.toLowerCase().includes(searchTerm) ||
        c.aiResponse.toLowerCase().includes(searchTerm)
        : true;
      const matchesFeature = selectedFeature ? c.prompt === selectedFeature : true;
      const matchesTags = selectedTags.length
        ? selectedTags.some(tag => c.tags.includes(tag))
        : true;
      return matchesSearch && matchesFeature && matchesTags;
    })
    .sort((a, b) => {
      const ta = new Date(a.timestamp).getTime();
      const tb = new Date(b.timestamp).getTime();
      return sortOrder === "asc" ? ta - tb : tb - ta;
    });

  const handleViewSnapshot = (snapshot: number[]) => {
    setSelectedSnapshot(new Uint8Array(snapshot));
    setIsDrawerOpen(true);
  };

  const handleRestoreSnapshot = (snapshot: Uint8Array) => {
    Y.applyUpdate(yDoc, snapshot);
    setIsDrawerOpen(false);
  };

  const addTagToContribution = (id: string, tag: string) => {
    setContributions(prev => {
      return prev.map(c => {
        if (c.id === id) {
          const newTags = Array.from(new Set([...(c.tags || []), tag]));
          const updated = { ...c, tags: newTags };
          contribSocket.send(
            JSON.stringify({ type: "contribution:tag", detail: updated })
          );
          return updated;
        }
        return c;
      });
    });
  };
  const handleHighlightContribution = (id: string) => {
    if (!highlightText || !removeHighlight) return;
    const metadataMap = yDoc.getMap<AIContributionMetadata>("metadata");
    const metadata = metadataMap.get(id);
    if (!metadata) return;
    const startPos = Y.createAbsolutePositionFromRelativePosition(metadata.start, yDoc);
    const endPos = Y.createAbsolutePositionFromRelativePosition(metadata.length, yDoc);
    if (!startPos || !endPos) return;
    const index = startPos.index;
    const length = endPos.index - index;
    highlightText(index, length, "#FFFF99");
    setTimeout(() => removeHighlight(index, length), 2000);
  };


  const handleTagChange = (e: SelectChangeEvent<string[]>) => {
    setSelectedTags(e.target.value as string[]);
  };

  return (
    <div style={{ height: "100%", padding: 10, display: "flex", flexDirection: "column" }}>
      <TextField
        label="Search by User or Text"
        size="small"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <FormControl size="small" style={{ minWidth: 150 }}>
          <InputLabel>AI Feature</InputLabel>
          <Select
            value={selectedFeature}
            onChange={handleFeatureChange}
            label="AI Feature"
          >
            <MenuItem value="">All</MenuItem>
            {aiFeatures.map(f => (
              <MenuItem key={f} value={f}> {f} </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={toggleSortOrder}>
          {sortOrder === "asc" ? "Sort Desc" : "Sort Asc"}
        </Button>
      </div>
      <FormControl fullWidth style={{ marginTop: 10 }}>
        <InputLabel>Select Tags</InputLabel>
        <Select
          multiple
          value={selectedTags}
          onChange={handleTagChange}
          renderValue={sel => (sel as string[]).join(", ")}
        >
          {uniqueTags.map(tag => (
            <MenuItem key={tag} value={tag}>
              <Checkbox checked={selectedTags.includes(tag)} />
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div style={{ flexGrow: 1, overflowY: "auto", marginTop: 10 }}>
        {filtered.length === 0 ? (
          <Typography>No contributions found.</Typography>
        ) : (
          <Accordion selectionMode="multiple">
            {filtered.map(c => (
              <AccordionItem
                key={c.id}
                startContent={<Avatar isBordered color="primary" radius="lg" />}
                title={c.user || "Anonymous"}
                subtitle={
                  <div>
                    <Typography variant="body2">{c.prompt}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {new Date(c.timestamp).toLocaleString()}
                    </Typography>
                  </div>
                }
              >
                <Typography variant="subtitle2">AI Response:</Typography>
                <Typography variant="body2">{c.aiResponse}</Typography>
                <Button onClick={() => handleViewSnapshot(c.ydocSnapshot)}>
                  View Snapshot
                </Button>
                <Button onClick={() => handleHighlightContribution(c.id)}>
                  Highlight Range
                </Button>
                <TextField
                  placeholder="Add Tag"
                  size="small"
                  fullWidth
                  onKeyDown={e => {
                    const val = (e.target as HTMLInputElement).value.trim();
                    if (e.key === "Enter" && val) {
                      addTagToContribution(c.id, val);
                      (e.target as HTMLInputElement).value = "";
                      e.preventDefault();
                    }
                  }}
                />
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
      <SnapshotDrawer
        isOpen={isDrawerOpen}
        snapshot={selectedSnapshot}
        onRestore={handleRestoreSnapshot}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default AIContributionList;