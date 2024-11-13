// app/utils/stubhub.js

import axios from 'axios';

const CLIENT_ID = process.env.STUBHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.STUBHUB_CLIENT_SECRET;

let cachedToken = null;
let tokenExpiry = null;

export async function getAuthToken() {
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  const response = await axios.post(
    'https://api.stubhub.com/sellers/oauth/accesstoken',
    new URLSearchParams({
      grant_type: 'client_credentials',
    }),
    {
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  cachedToken = response.data.access_token;
  tokenExpiry = Date.now() + response.data.expires_in * 1000; // Token expiry time in milliseconds

  return cachedToken;
}
