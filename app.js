const express = require('express');
const corsMiddleware = require('./middleware/cors');
const bodyParserMiddleware = require('./middleware/bodyParser');
const authRoutes = require('./routes/userRoutes');

const app = express();

// Use middleware
app.use(corsMiddleware);
app.use(bodyParserMiddleware);

// routes
app.use('/user', authRoutes);


module.exports = app;
