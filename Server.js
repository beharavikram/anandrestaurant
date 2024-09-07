const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/restaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Example API endpoint
app.get('/api/menu', (req, res) => {
  res.json([
    { name: 'Margherita Pizza', description: 'A classic pizza topped with fresh mozzarella, tomatoes, and basil.', price: '$12.99' },
    // Add more menu items here
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});