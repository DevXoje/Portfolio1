const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
// Settings
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares

// Routes

// Static files

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}/`);
});