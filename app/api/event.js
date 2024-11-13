// app/api/events.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.stubhub.com/catalog/events', {
      headers: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`,
      },
      params: {
        q: 'Taylor Swift',
        // Add other parameters as needed
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
}
