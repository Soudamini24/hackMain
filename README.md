# Goa Family Trip Planner

A Next.js app that helps you plan a 4-day family trip to Goa, with:
- Preference Agent: Extracts requirements
- Budget Agent: Allocates budget (Hotel ₹10k, Travel ₹6k, Food ₹4k)
- Itinerary Agent: Creates day-wise plan
- Local Experience Agent: Finds attractions and vegetarian restaurants
- Risk Agent: Monitors weather and closures

## Features
- Modern Material UI design
- Modular agent-based architecture
- Simulated APIs for demo
- Vegetarian-friendly, family-oriented

## Getting Started

1. Install dependencies:
	```sh
	npm install
	```
2. Run the development server:
	```sh
	npm run dev
	```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization
- Update agent logic in `app/agents/`
- Update mock data in `app/utils/mockData.ts`
- Replace simulated APIs in `app/api/` with real data sources as needed
