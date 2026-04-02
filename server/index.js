require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(cors());

// IGDB API Configuration
const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID || 'your-twitch-client-id';
const TWITCH_CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET || 'your-twitch-client-secret';
const IGDB_API_BASE_URL = 'https://api.igdb.com/v4';

let accessToken = null;
let tokenExpiresAt = null;

// Function to get Twitch OAuth token
const getTwitchAccessToken = async () => {
    if (accessToken && tokenExpiresAt && Date.now() < tokenExpiresAt) {
        return accessToken;
    }

    try {
        const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
            params: {
                client_id: TWITCH_CLIENT_ID,
                client_secret: TWITCH_CLIENT_SECRET,
                grant_type: 'client_credentials'
            }
        });

        accessToken = response.data.access_token;
        tokenExpiresAt = Date.now() + (response.data.expires_in * 1000) - 60000; // Refresh 1 minute early
        return accessToken;
    } catch (error) {
        console.error('Error getting Twitch access token:', error.response?.data || error.message);
        throw error;
    }
};

// Function to make IGDB API requests
const makeIGDBRequest = async (endpoint, query) => {
    const token = await getTwitchAccessToken();
    
    return axios({
        method: 'POST',
        url: `${IGDB_API_BASE_URL}/${endpoint}`,
        headers: {
            'Client-ID': TWITCH_CLIENT_ID,
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
        data: query
    });
};

app.options('*', cors());

// Games endpoint
app.post('/games', async (req, res) => {
    try {
        const { type, fieldOptions, gameId, collectionOfIds, searchValue } = req.body;
        let query = '';

        // Build query based on request type
        switch (type) {
            case 'search':
                query = `fields ${fieldOptions.join(',')}; search "${searchValue}"; limit 20;`;
                break;
            case 'specificGame':
                query = `fields ${fieldOptions.join(',')}; where id = ${gameId};`;
                break;
            case 'franchiseGames':
                query = `fields ${fieldOptions.join(',')}; where id = (${collectionOfIds.join(',')});`;
                break;
            default:
                return res.status(400).json({ error: 'Invalid request type' });
        }

        const response = await makeIGDBRequest('games', query);
        res.json(response.data);
    } catch (error) {
        console.error('Games API Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch games data' });
    }
});

// Covers endpoint
app.post('/covers', async (req, res) => {
    try {
        const { gameID } = req.body;
        const query = `fields *; where game = ${gameID};`;
        
        const response = await makeIGDBRequest('covers', query);
        res.json(response.data);
    } catch (error) {
        console.error('Covers API Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch covers data' });
    }
});

// Collections endpoint
app.post('/collections', async (req, res) => {
    try {
        const { collectionID } = req.body;
        const query = `fields *; where id = ${collectionID};`;
        
        const response = await makeIGDBRequest('collections', query);
        res.json(response.data);
    } catch (error) {
        console.error('Collections API Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch collections data' });
    }
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);