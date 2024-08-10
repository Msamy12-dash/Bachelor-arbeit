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

import styles from "./promptList.module.css"; // Importing CSS for additional styles

import YPartyKitProvider from "y-partykit/provider";

export default function PromptList({
  yProvider,
}: {
  promptList: string[];
  yProvider: YPartyKitProvider;
}) {
  const [prompts, setPrompts] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editContent, setEditContent] = useState<string>("");
  const yProviderDoc = yProvider?.doc;
  const yProviderArr = yProviderDoc?.getArray("prompts");
  console.log("yProvider------",yProvider)

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
      <div className={styles.scrollableList}>
        <List>
          {prompts.map((prompt, index) => (
            <ListItem key={index}>
              <div className={`card ${styles.card}`}>
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <div className={styles.nameDate}>
                      {isEditing === index ? (
                        <textarea
                          className={styles.editTextarea}
                          value={editContent}
                          onChange={handleContentChange}
                        />
                      ) : (
                        <ListItemText
                          className={styles.textWrap}
                          primary={prompt}
                        />
                      )}
                    </div>
                    <div className={styles.editDeleteHistory}>
                      {isEditing === index ? (
                        <>
                          <button
                            className={`btn-save ${styles.btnSave}`}
                            onClick={saveEdit}
                          >
                            Save
                          </button>
                          <button
                            className={` btn-cancel ${styles.btnCancel}`}
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
