const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = 3000;

const billboardURL = 'https://www.billboard.com/charts/billboard-global-200/';

// Enable CORS to allow your frontend to access the backend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Route to fetch the Billboard Global 200 chart
app.get('/api/billboard-global-200', async (req, res) => {
    try {
        const { data } = await axios.get(billboardURL);
        const $ = cheerio.load(data);

        let songs = [];

        $('.o-chart-results-list-row-container').each((index, element) => {
            const rank = $(element).find('.c-label.a-font-primary-bold-l').text().trim();
            const title = $(element).find('.c-title.a-no-trucate.a-font-primary-bold-s.u-letter-spacing-0021').text().trim();
            const artist = $(element).find('.c-label.a-no-trucate.a-font-primary-s.u-letter-spacing-0021').text().trim();

            songs.push({
                rank: parseInt(rank),
                title,
                artist
            });
        });

        res.json(songs);
    } catch (error) {
        console.error('Error fetching Billboard data:', error);
        res.status(500).json({ error: 'Failed to fetch Billboard Global 200 data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
