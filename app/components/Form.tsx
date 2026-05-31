"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

interface FormProps {
  onSubmit: (data: any) => void;
}

export default function TripForm({ onSubmit }: FormProps) {
  const [fromLocation, setFromLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [travelType, setTravelType] = useState("Family");

  const calculateBudget = () => {
    // Dummy calculation for now
    // Later replace with actual distance API
    const estimatedDistance = 500; // km

    const travelCostPerKm = 5;
    const hotelCostPerDay = 2000;

    return (
      estimatedDistance * travelCostPerKm +
      Number(days) * hotelCostPerDay
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const budget = calculateBudget();

    onSubmit({
      fromLocation,
      destination,
      budget,
      days: Number(days),
      travelType,
    });
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Trip Preferences
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="From"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              fullWidth
            />

            <TextField
              label="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              fullWidth
            />

            <TextField
              label="Days"
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              fullWidth
            />

            <TextField
              select
              label="Travel Type"
              value={travelType}
              onChange={(e) => setTravelType(e.target.value)}
            >
              <MenuItem value="Family">Family</MenuItem>
              <MenuItem value="Solo">Solo</MenuItem>
              <MenuItem value="Couple">Couple</MenuItem>
              <MenuItem value="Friends">Friends</MenuItem>
            </TextField>

            <Button type="submit" variant="contained">
              Generate Trip
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}