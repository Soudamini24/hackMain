"use client";

import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { BudgetAgent } from "../agents/BudgetAgent";
import { ItineraryAgent } from "../agents/ItineraryAgent";
import { LocalExperienceAgent } from "../agents/LocalExperienceAgent";
import { RiskAgent } from "../agents/RiskAgent";
import TripForm from "./Form";

export default function Index() {
  const [preferences, setPreferences] = React.useState<any | null>(null);
  const [budget, setBudget] = React.useState<any | null>(null);

  const [itinerary, setItinerary] = React.useState<string[]>([]);
  const [attractions, setAttractions] = React.useState<string[]>([]);
  const [restaurants, setRestaurants] = React.useState<string[]>([]);

  const [weather, setWeather] = React.useState("Sunny, 30°C");
  const [closures, setClosures] = React.useState<string[]>([]);

  const [loading, setLoading] = React.useState(false);

  const [logs, setLogs] = React.useState<string[]>([]);

  React.useEffect(() => {
    const loadTrip = async () => {
      if (!preferences || !budget) return;

      try {
  setLoading(true);

  // Clear previous trip data
  setItinerary([]);
  setAttractions([]);
  setRestaurants([]);
  setClosures([]);

  setLogs([
    "Preference Agent extracted trip preferences",
    `Budget Agent allocated ₹${preferences.budget} budget`,
  ]);

        const response = await fetch("/api/iternary", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(preferences),
          
        });

        const data = await response.json();

        setItinerary(data.itinerary || []);

        setAttractions([
          `${preferences.destination} Beach`,
          `${preferences.destination} Fort`,
          `${preferences.destination} Market`,
        ]);

       setRestaurants([
  `${preferences.destination} Cafe`,
  `${preferences.destination} Family Restaurant`,
  `${preferences.destination} Food Court`,
]);

        setWeather("Sunny, 30°C");
        setClosures([]);

        setLogs([
  "Preference Agent extracted trip preferences",
  `Budget Agent allocated ₹${preferences.budget} budget`,
]);
      } catch (error) {
        console.error("Trip generation failed", error);
      } finally {
        setLoading(false);
      }
    };

    loadTrip();
  }, [preferences, budget]);
const handleRainAlert = () => {
  setWeather("Heavy Rain");

  setClosures([
    "Beach activities cancelled due to weather",
  ]);

  setItinerary((prev) => {
    const updated = [...prev];

    if (updated.length >= 2) {
  updated[1] =
    `Day 2: Indoor activities in ${preferences?.destination}`;
}

    return updated;
  });

  setLogs((prev) => [
    ...prev,
    "Risk Agent detected heavy rain",
    "Replanner Agent modified Day 2 itinerary",
  ]);
};
  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        my: 4,
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: 700, mb: 4 }}
      >
        AI Travel Planning Engine
      </Typography>

      <TripForm onSubmit={setPreferences} />

      {preferences && (
        <Box
          sx={{
            mb: 3,
            p: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">
            Trip Preferences
          </Typography>

          <Typography>
            Destination: {preferences.destination}
          </Typography>

          <Typography>
            Budget: ₹{preferences.budget}
          </Typography>

          <Typography>
            Days: {preferences.days}
          </Typography>

          <Typography>
            Travel Type: {preferences.travelType}
          </Typography>
        </Box>
      )}

      {preferences && (
        <BudgetAgent
          budget={preferences.budget}
          onBudgetAllocated={setBudget}
        />
      )}

      {loading && (
        <Box sx={{ textAlign: "center", my: 3 }}>
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>
            Generating trip...
          </Typography>
        </Box>
      )}

      {preferences && budget && !loading && (
        <>
          <ItineraryAgent itinerary={itinerary} />

          <LocalExperienceAgent
            attractions={attractions}
            restaurants={restaurants}
          />

         <RiskAgent
  weather={weather}
  closures={closures}
  onRainAlert={handleRainAlert}
/>

          <Box
            sx={{
              mt: 3,
              p: 2,
              border: "1px solid #ddd",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
            >
              Agent Activity Log
            </Typography>

            {logs.map((log, index) => (
              <Typography
                key={index}
                sx={{ mb: 1 }}
              >
                • {log}
              </Typography>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}