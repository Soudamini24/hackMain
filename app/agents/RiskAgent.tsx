import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

interface RiskAgentProps {
  weather: string;
  closures: string[];
  onRainAlert?: () => void;
}

export function RiskAgent({
  weather,
  closures,
  onRainAlert,
}: RiskAgentProps) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Risk Agent
        </Typography>

        <Typography>
          Weather Status: <strong>{weather}</strong>
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Closures & Alerts
        </Typography>

        <List>
          {closures.length > 0 ? (
            closures.map((closure, index) => (
              <ListItem key={index}>
                <ListItemText primary={closure} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No active closures" />
            </ListItem>
          )}
        </List>

        <Button
          variant="contained"
          color="warning"
          sx={{ mt: 2 }}
          onClick={onRainAlert}
        >
          Simulate Rain Alert
        </Button>
      </CardContent>
    </Card>
  );
}