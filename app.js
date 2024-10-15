const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();

const apiRoutes = require('./routes/api');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static('frontend'));

// Connect to the database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
