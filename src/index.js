const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();
const port = 3000;
// Settings
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/express-paginacion', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('db is connect')
}).catch(err => {
    console.log(err);
});
const indexRoutes = require('./routes/index');
// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);
// Static files

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}/`);
});