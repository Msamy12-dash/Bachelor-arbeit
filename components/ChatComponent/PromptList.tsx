// promptList.tsx
import React, { useEffect, useState, useCallback } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import YPartyKitProvider from "y-partykit/provider";

export default function PromptList({
  yProvider,
}: {
  promptList: string[];
  yProvider: YPartyKitProvider;
}) {
  const [prompts, setPrompts] = useState<any[]>([]);
  console.log("prompts list::", prompts)
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editContent, setEditContent] = useState<string>("");
  const yProviderDoc = yProvider?.doc;
  const yProviderArr = yProviderDoc?.getArray("prompts");

  const loadPrompts = useCallback(() => {
    const savedPrompts = yProviderArr?.toArray() || [];
    setPrompts(savedPrompts);
  }, [yProviderArr]);

  useEffect(() => {
    loadPrompts();

    const handleUpdate = () => {
      loadPrompts();
    };

    yProviderArr?.observe(handleUpdate);
    return () => yProviderArr?.unobserve(handleUpdate);
  }, [yProviderArr, loadPrompts]);

  const handleDelete = useCallback(
    (index: number) => {
      yProviderArr.delete(index, 1); // Delete 1 item at the specified index
      loadPrompts(); // Reload prompts to reflect the deletion
    },
    [yProviderArr, loadPrompts]
  );

  const handleEdit = useCallback(
    (index: number) => {
      setIsEditing(index);
      setEditContent(prompts[index]);
    },
    [prompts]
  );

  const handleContentChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setEditContent(e.target.value);
    },
    []
  );

  const saveEdit = useCallback(() => {
    if (isEditing !== null) {
      yProviderArr.delete(isEditing, 1); // Delete the old prompt
      yProviderArr.insert(isEditing, [editContent]); // Insert the updated prompt
      setIsEditing(null);
      setEditContent("");
      loadPrompts(); // Reload prompts to reflect the update
    }
  }, [isEditing, editContent, yProviderArr, loadPrompts]);

  const cancelEdit = useCallback(() => {
    setIsEditing(null);
    setEditContent("");
  }, []);

  return (
    <Container style={{ padding: 0 }}>
      <Typography gutterBottom variant="h6" align="center">
        Prompt List
      </Typography>
      <div className="max-h-[35vw] overflow-y-auto p-2.5 bg-[#f9f9f9] border border-[#ddd] rounded-lg shadow-md">
        <List>
          {prompts.map((prompt, index) => (
            <ListItem key={index}>
              <div className="flex w-full bg-white border border-[#ddd] rounded-lg mb-2.5 shadow-md">
                <div className="flex-1 p-2.5">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-1 break-words">
                      {isEditing === index ? (
                        <textarea
                          className="w-full text-center p-2 border border-[#ddd] rounded-md shadow-inner"
                          value={editContent}
                          onChange={handleContentChange}
                        />
                      ) : (
                        <ListItemText
                          className="break-words text-center p-2.5 rounded-md bg-[#f1f1f1]"
                          primary={prompt}
                        />
                      )}
                    </div>
                    <div className="flex flex-col ml-2.5">
                      {isEditing === index ? (
                        <>
                          <button
                            className="m-1.5 p-1.5 rounded-md border-none cursor-pointer transition-colors ease-in-out duration-300 bg-[#4caf50] text-white hover:bg-[#45a049]"
                            onClick={saveEdit}
                          >
                            Save
                          </button>
                          <button
                            className="m-1.5 p-1.5 rounded-md border-none cursor-pointer transition-colors ease-in-out duration-300 bg-[#f44336] text-white hover:bg-[#e53935]"
                            onClick={cancelEdit}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <IconButton onClick={() => handleEdit(index)}>
                            <EditIcon color="success" />
                          </IconButton>
                          <IconButton onClick={() => handleDelete(index)}>
                            <DeleteIcon color="warning" />
                          </IconButton>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
      {prompts.length === 0 && (
        <Typography
          style={{ textAlign: "center", marginTop: "20px" }}
          variant="body1"
        >
          No prompts available.
        </Typography>
      )}
    </Container>
  );
}