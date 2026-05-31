import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

export function RiskAgent({ weather, closures }: { weather: string; closures: string[] }) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Risk Monitor</Typography>
        <Typography>Weather: {weather}</Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>Closures</Typography>
        <List>
          {closures.length ? closures.map((c, i) => (
            <ListItem key={i}><ListItemText primary={c} /></ListItem>
          )) : <ListItem><ListItemText primary="None" /></ListItem>}
        </List>
      </CardContent>
    </Card>
  );
}
