import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

export function ItineraryAgent({ itinerary }: { itinerary: string[] }) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>4-Day Goa Itinerary</Typography>
        <List>
          {itinerary.map((day, i) => (
            <ListItem key={i}><ListItemText primary={day} /></ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
