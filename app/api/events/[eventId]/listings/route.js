// app/api/events/[eventId]/listings/route.js

import { NextResponse } from 'next/server';
import { getEventListings } from '@/app/utils/getEventData';

export async function GET(request, { params }) {
  const { eventId } = params;
  const { searchParams } = new URL(request.url);
  const start = parseInt(searchParams.get('start')) || 0;
  const rows = parseInt(searchParams.get('rows')) || 20;

  try {
    const listings = await getEventListings(eventId, start, rows);
    return NextResponse.json({ listings });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}
