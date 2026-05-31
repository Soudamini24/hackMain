"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import { PreferenceAgent } from '../agents/PreferenceAgent';
import { BudgetAgent } from '../agents/BudgetAgent';
import { ItineraryAgent } from '../agents/ItineraryAgent';
import { LocalExperienceAgent } from '../agents/LocalExperienceAgent';
import { RiskAgent } from '../agents/RiskAgent';


// Main demo flow
export default function Index() {
  const [preferences, setPreferences] = React.useState<any | null>(null);
  const [budget, setBudget] = React.useState<any | null>(null);
  const [itinerary, setItinerary] = React.useState<string[]>([]);
  const [attractions, setAttractions] = React.useState<string[]>([]);
  const [restaurants, setRestaurants] = React.useState<string[]>([]);
  const [weather, setWeather] = React.useState<string>('Sunny, 30°C');
  const [closures, setClosures] = React.useState<string[]>([]);

  // Simulate agent logic
  React.useEffect(() => {
    if (preferences && budget) {
      setItinerary([
        'Day 1: Arrive in Goa, relax at Calangute Beach',
        'Day 2: Visit Baga Beach, Aguada Fort, lunch at Navtara',
        'Day 3: Explore Palolem Beach, spice plantation tour',
        'Day 4: Souvenir shopping, Miramar Beach, depart',
      ]);
      setAttractions([
        'Calangute Beach',
        'Baga Beach',
        'Aguada Fort',
        'Palolem Beach',
        'Miramar Beach',
        'Spice Plantation',
      ]);
      setRestaurants([
        'Navtara',
        'Bean Me Up',
        'Blue Planet Cafe',
        'Cafe Tato',
      ]);
      setWeather('Sunny, 30°C');
      setClosures([]);
    }
  }, [preferences, budget]);

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', my: 4, fontFamily: 'sans-serif' }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Goa Family Trip Planner
      </Typography>
      <PreferenceAgent onPreferencesSubmit={setPreferences} />
      {preferences && (
        <BudgetAgent budget={preferences.budget} onBudgetAllocated={setBudget} />
      )}
      {preferences && budget && (
        <>
          <ItineraryAgent itinerary={itinerary} />
          <LocalExperienceAgent attractions={attractions} restaurants={restaurants} />
          <RiskAgent weather={weather} closures={closures} />
        </>
      )}
    </Box>
  );
}
