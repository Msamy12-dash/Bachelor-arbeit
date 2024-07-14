import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
} from "@mui/material";

export default function PromptList(promptList: { promptList: string[] }) {
  const [prompts, setPrompts] = useState<string[]>([]);

  useEffect(() => {
    const savedText = localStorage.getItem("savedPrompts");

    if (savedText) {
      try {
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
  }, [promptList]);

  return (
    <Container>
      <Typography gutterBottom variant="h6">
        Prompt List
      </Typography>
      <List>
        {prompts.map((prompt, index) => (
          <ListItem key={index}>
            <ListItemText primary={prompt} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
