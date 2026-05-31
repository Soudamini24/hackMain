import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

interface LocalExperienceAgentProps {
  attractions: string[];
  restaurants: string[];
}

export function LocalExperienceAgent({
  attractions,
  restaurants,
}: LocalExperienceAgentProps) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Local Experience Agent
        </Typography>

        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Attractions & Places to Visit
        </Typography>

        <List>
          {attractions.length > 0 ? (
            attractions.map((attraction, index) => (
              <ListItem key={index}>
                <ListItemText primary={attraction} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No attractions found" />
            </ListItem>
          )}
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Recommended Restaurants
        </Typography>

        <List>
          {restaurants.length > 0 ? (
            restaurants.map((restaurant, index) => (
              <ListItem key={index}>
                <ListItemText primary={restaurant} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No restaurants found" />
            </ListItem>
          )}
        </List>
      </CardContent>
    </Card>
  );
}