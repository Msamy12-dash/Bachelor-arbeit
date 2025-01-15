import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";

interface AIContribution {
  id: string;
  user: string;
  prompt: string;
  aiResponse: string;
  timestamp: string;
}

let addContribution: ((newContribution: AIContribution) => void) | null = null;

export const registerAddContribution = (
  fn: (newContribution: AIContribution) => void
) => {
  addContribution = fn;
};

export const getAddContribution = () => addContribution;

const AIContributionList: React.FC = () => {
  const [contributions, setContributions] = useState<AIContribution[]>([]);

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

    refreshContributions(); // Load initial contributions

    return () => {
      registerAddContribution(() => {});
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshContributions();
    }, 5000); // Auto-refresh every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  return (
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      <Typography variant="h5" gutterBottom>
        AI Contributions
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={refreshContributions}
        style={{ marginBottom: "1rem" }}
        onMouseOver={refreshContributions}
       onTimeUpdate={refreshContributions}
      >
        Refresh Contributions
      </Button>

      {contributions.length === 0 ? (
        <Typography variant="body1">No contributions available.</Typography>
      ) : (
        contributions.map((contribution) => (
          <Card
            key={contribution.id}
            style={{
              marginBottom: "0.5rem",
              maxWidth: "300px",
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
              <Typography
                variant="body2"
                style={{ maxHeight: "50px", overflow: "hidden" }}
              >
                {contribution.prompt}
              </Typography>
              <Typography variant="subtitle2">AI Response:</Typography>
              <Typography
                variant="body2"
                style={{ maxHeight: "50px", overflow: "hidden" }}
              >
                {contribution.aiResponse}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default AIContributionList;
