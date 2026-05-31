// Simulated API for weather monitoring
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Simulate weather data for Goa
  return NextResponse.json({ weather: 'Sunny, 30°C', risk: 'None' });
}
