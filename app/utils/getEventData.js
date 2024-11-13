// app/utils/getEventData.js

import axios from 'axios';
import { getAuthToken } from './stubhub';

export async function getEventDetails(eventId) {
  const token = await getAuthToken();

  const response = await axios.get(
    `https://api.stubhub.com/sellers/search/events/v3/${eventId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function getEventListings(eventId, start = 0, rows = 20) {
  const token = await getAuthToken();

  const response = await axios.get(
    'https://api.stubhub.com/sellers/search/listings/v3',
    {
      params: {
        eventId,
        start,
        rows,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.listings;
}
