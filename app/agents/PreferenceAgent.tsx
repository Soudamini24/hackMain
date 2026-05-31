import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

export function PreferenceAgent({ onPreferencesSubmit }: { onPreferencesSubmit: (prefs: any) => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPreferencesSubmit({
      destination: 'Goa',
      days: 4,
      budget: 20000,
      family: true,
      beach: true,
      nightlife: false,
      vegetarian: true,
    });
  };
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Preferences</Typography>
        <form onSubmit={handleSubmit}>
          <Button variant="contained" type="submit">Use Default Goa Preferences</Button>
        </form>
      </CardContent>
    </Card>
  );
}
