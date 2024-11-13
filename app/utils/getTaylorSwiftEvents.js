// app/utils/getTaylorSwiftEvents.js

import axios from 'axios';
import { getAuthToken } from './stubhub';

export async function getTaylorSwiftEvents() {
  const token = await getAuthToken();

  const response = await axios.get(
    'https://api.stubhub.com/sellers/search/events/v3',
    {
      params: {
        q: 'Taylor Swift',
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.events;
}
