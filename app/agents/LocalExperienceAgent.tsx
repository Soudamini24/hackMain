import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

export function LocalExperienceAgent({ attractions, restaurants }: { attractions: string[]; restaurants: string[] }) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Local Experiences</Typography>
        <Typography variant="subtitle1">Beaches & Attractions</Typography>
        <List>
          {attractions.map((a, i) => (
            <ListItem key={i}><ListItemText primary={a} /></ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1">Vegetarian Restaurants</Typography>
        <List>
          {restaurants.map((r, i) => (
            <ListItem key={i}><ListItemText primary={r} /></ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
