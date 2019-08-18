const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

// MongoDB Database Connection
/*const db = mongoose.connection;
const MONGO_URI = 'mongodb://alapham:dirtywars1122@ds263927.mlab.com:63927/votingapp'
mongoose.connect(MONGO_URI, {useNewUrlParser: true});
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/

// Application Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);
app.use(logger('dev'));

app.get('/health', (req, res) => {
    res.send('good!')
})

// Routes
app.use('/api', require('./routes'));

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Listening to App on ${PORT}`);
});