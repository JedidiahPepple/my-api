const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.get('/health', (req, res) => {
  res.json({ message: 'healthy' });
});

app.get('/me', (req, res) => {
  res.json({
    name: 'Jedidiah',
    email: '188516341+JedidiahPepple@users.noreply.github.com',
    github: 'github.com/JedidiahPepple'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

