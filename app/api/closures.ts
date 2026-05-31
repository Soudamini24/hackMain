// Simulated API for closures monitoring
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Simulate no closures for demo
  return NextResponse.json({ closures: [] });
}
