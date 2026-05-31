// Simulated API for Goa attractions
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json({
    attractions: [
      'Calangute Beach',
      'Baga Beach',
      'Aguada Fort',
      'Palolem Beach',
      'Miramar Beach',
      'Spice Plantation',
    ],
  });
}
