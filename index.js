const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const mockWhatsAppCheck = (numbers) => {
  const results = {
    nonWhatsAppNumbers: [],
    whatsAppNumbers: []
  };

  numbers.forEach(number => {
    if (number.endsWith('0')) {
      results.nonWhatsAppNumbers.push(number);
    } else {
      results.whatsAppNumbers.push(number);
    }
  });

  return results;
};

app.post('/check-numbers', (req, res) => {
  const { numbers } = req.body;
  const results = mockWhatsAppCheck(numbers);
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
