import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";
import SnapshotDrawer from "./SnapshotDrawer";
import * as Y from "yjs";

interface AIContribution {
  id: string;
  user: string;
  prompt: string;
  aiResponse: string;
  timestamp: string;
  ydocSnapshot: number[];
}

let addContribution: ((newContribution: AIContribution) => void) | null = null;

export const registerAddContribution = (
  fn: (newContribution: AIContribution) => void
) => {
  addContribution = fn;
};

export const getAddContribution = () => addContribution;

const AIContributionList: React.FC<{ yDoc: Y.Doc }> = ({ yDoc }) => {
  const [contributions, setContributions] = useState<AIContribution[]>([]);
  const [selectedSnapshot, setSelectedSnapshot] = useState<Uint8Array | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const refreshContributions = () => {
    const storedContributions: AIContribution[] = JSON.parse(
      localStorage.getItem("aiContributions") || "[]"
    );
    const uniqueContributions = storedContributions.filter(
      (value, index, self) =>
        index === self.findIndex((c) => c.id === value.id)
    );
    setContributions(uniqueContributions);
  };

  useEffect(() => {
    registerAddContribution((newContribution) => {
      setContributions((prev) => {
        const existingIds = new Set(prev.map((contrib) => contrib.id));
        if (!existingIds.has(newContribution.id)) {
          const updatedContributions = [...prev, newContribution];
          localStorage.setItem(
            "aiContributions",
            JSON.stringify(updatedContributions)
          );
          return updatedContributions;
        }
        return prev;
      });
    });

    refreshContributions();

    return () => {
      registerAddContribution(() => {});
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshContributions();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleViewSnapshot = (snapshot: number[]) => {
    console.log("Viewing snapshot:", snapshot);
    const ydocSnapshot = new Uint8Array(snapshot);
    setSelectedSnapshot(ydocSnapshot);
    setIsDrawerOpen(true);
  };

  const handleRestoreSnapshot = (snapshot: Uint8Array) => {

    Y.applyUpdate(yDoc, snapshot);
    setIsDrawerOpen(false)
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", overflowY: "auto" }}>
      <Typography variant="h5" gutterBottom>
        AI Contributions
      </Typography>

      <div style={{ flexGrow: 1, overflowY: "auto" }}>
        {contributions.length === 0 ? (
          <Typography variant="body1">No contributions available.</Typography>
        ) : (
          contributions.map((contribution) => (
            <Card
              key={contribution.id}
              style={{
                marginBottom: "0.5rem",
                width: "100%",
                overflow: "hidden",
                wordWrap: "break-word",
              }}
            >
              <CardContent>
                <Typography variant="h6">User: {contribution.user || "Anonymous"}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Timestamp: {new Date(contribution.timestamp).toLocaleString()}
                </Typography>
                <Typography variant="subtitle2">Prompt:</Typography>
                <Typography variant="body2">{contribution.prompt}</Typography>
                <Typography variant="subtitle2">AI Response:</Typography>
                <Typography variant="body2">{contribution.aiResponse}</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleViewSnapshot(contribution.ydocSnapshot)}
                  style={{ marginTop: "1rem", width: "100%" }}
                >
                  View Snapshot
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <SnapshotDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        snapshot={selectedSnapshot}
        onRestore={handleRestoreSnapshot}
      />
    </div>
  );

};

export default AIContributionList;
