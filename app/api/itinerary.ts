// Simulated API for Goa itinerary
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json({
    itinerary: [
      'Day 1: Arrive in Goa, relax at Calangute Beach',
      'Day 2: Visit Baga Beach, Aguada Fort, lunch at Navtara',
      'Day 3: Explore Palolem Beach, spice plantation tour',
      'Day 4: Souvenir shopping, Miramar Beach, depart',
    ],
  });
}
