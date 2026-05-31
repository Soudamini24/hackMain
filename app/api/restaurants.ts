// Simulated API for vegetarian restaurants in Goa
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json({
    restaurants: [
      'Navtara',
      'Bean Me Up',
      'Blue Planet Cafe',
      'Cafe Tato',
    ],
  });
}
