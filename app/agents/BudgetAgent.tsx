import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

export function BudgetAgent({ budget, onBudgetAllocated }: { budget: number; onBudgetAllocated: (alloc: any) => void }) {
  const allocation = { hotel: 10000, travel: 6000, food: 4000 };
  React.useEffect(() => {
    onBudgetAllocated(allocation);
    // eslint-disable-next-line
  }, []);
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Budget Allocation</Typography>
        <List>
          <ListItem><ListItemText primary="Hotel" secondary="₹10,000" /></ListItem>
          <ListItem><ListItemText primary="Travel" secondary="₹6,000" /></ListItem>
          <ListItem><ListItemText primary="Food" secondary="₹4,000" /></ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
