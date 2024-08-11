// promptList.tsx
import React, { useEffect, useState } from "react";
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
import * as Y from "yjs";
import { SINGLETON_ROOM_ID } from "@/party/types";

export default function PromptList({
  promptList,
  yDoc,
}: {
  promptList: string[];
  yDoc: Y.Doc;
}) {
  const [prompts, setPrompts] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editContent, setEditContent] = useState<string>("");

  const savedText = localStorage.getItem("savedPrompts");

  useEffect(() => {
    //console.log("🚀 ~ useEffect ~ savedText:-----", savedText);

    if (savedText) {
      try {
        const ytext = yDoc.getText("promptList");

        const getFromYdoc = ytext.getAttribute("savePrompt");

        const parsedPrompts = JSON.parse(savedText);
        if (Array.isArray(parsedPrompts)) {
          setPrompts(parsedPrompts);
        }
      } catch (error) {
        console.error(
          "Failed to parse saved prompts from local storage:",
          error
        );
      }
    }
  }, [savedText, promptList]);

  const handleDelete = (index: number) => {
    const updatedPrompts = prompts.filter((_, i) => i !== index);
    setPrompts(updatedPrompts);
    localStorage.setItem("savedPrompts", JSON.stringify(updatedPrompts));
  };

  const handleEdit = (index: number) => {
    setIsEditing(index);
    setEditContent(prompts[index]);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditContent(e.target.value);
  };

  const saveEdit = () => {
    if (isEditing !== null) {
      const updatedPrompts = [...prompts];
      updatedPrompts[isEditing] = editContent;
      setPrompts(updatedPrompts);
      localStorage.setItem("savedPrompts", JSON.stringify(updatedPrompts));
      setIsEditing(null);
      setEditContent("");
    }
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setEditContent("");
  };

  return (
    <Container style={{ padding: 0 }}>
      <Typography gutterBottom variant="h6">
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
                          primary={prompt}
                          className={styles.textWrap}
                        />
                      )}
                    </div>
                    <div className={styles.editDeleteHistory}>
                      {isEditing === index ? (
                        <>
                          <button
                            onClick={saveEdit}
                            className={`btn-save ${styles.btnSave}`}
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className={`btn-cancel  ${styles.btnCancel}`}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <IconButton onClick={() => handleEdit(index)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => handleDelete(index)}>
                            <DeleteIcon />
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
          variant="body1"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          No prompts available.
        </Typography>
      )}
    </Container>
  );
}
