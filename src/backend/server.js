const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/api/send-to-slack', async (req, res) => {
  const { text } = req.body;

  try {
    await fetch('https://hooks.slack.com/services/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', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });
  } catch (error) {
    res.status(500).send('Something went wrong submitting the form! You can email us instead (found at the bottom of the page).');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});