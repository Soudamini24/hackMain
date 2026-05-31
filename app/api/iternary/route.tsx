import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      destination = "Goa",
      days = 4,
      travelType = "Family",
      budget = 20000,
    } = body;

    const itinerary: string[] = [];

    for (let i = 1; i <= Number(days); i++) {
      itinerary.push(
        `Day ${i}: Explore ${destination} attractions (${travelType} Trip)`
      );
    }

    return NextResponse.json({
      success: true,
      itinerary,
      destination,
      budget,
      travelType,
    });
  } catch (error) {
    console.error("Itinerary API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate itinerary",
      },
      {
        status: 500,
      }
    );
  }
}