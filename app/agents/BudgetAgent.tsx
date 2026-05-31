import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export function BudgetAgent({
  budget,
  onBudgetAllocated,
}: {
  budget: number;
  onBudgetAllocated: (alloc: any) => void;
}) {
  const allocation = {
    hotel: Math.round(budget * 0.5),
    travel: Math.round(budget * 0.3),
    food: Math.round(budget * 0.2),
  };

  React.useEffect(() => {
    onBudgetAllocated(allocation);
  }, [budget]);

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Budget Allocation
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Hotel"
              secondary={`₹${allocation.hotel}`}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Travel"
              secondary={`₹${allocation.travel}`}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Food"
              secondary={`₹${allocation.food}`}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}