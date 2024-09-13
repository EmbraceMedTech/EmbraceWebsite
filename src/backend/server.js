const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 5000;

// Access the API_URL from environment variables
const API_URL = process.env.CONTACT_WEBHOOK_URL;

app.use(bodyParser.json());

app.post('/api/send-to-slack', async (req, res) => {
  const { text } = req.body;

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });
    res.status(200).send('Message sent to Slack!');
  } catch (error) {
    res.status(500).send('Something went wrong submitting the form! You can email us instead (found at the bottom of the page).');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
