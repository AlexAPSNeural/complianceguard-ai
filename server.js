const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to ComplianceGuard AI');
});

app.get('/api/compliance-status', (req, res) => {
  res.json({ message: 'Compliance status retrieved successfully.' });
});

app.post('/api/update-regulations', (req, res) => {
  res.json({ message: 'Regulations updated successfully.' });
});

// Error Handling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

// Server
app.listen(port, () => {
  console.log(`ComplianceGuard AI server running on port ${port}`);
});