const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const app = express();

const port = 5000;

let hbs = exphbs.create({defaultLayout: 'main'});

//view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set public folder
app.use('/public', express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



const vote = require('./routes/vote');

app.use('/', vote);
app.use('/send',vote);


// Start server
app.listen(port, () => {
    console.log('SERVER STARTED ON PORT ' + port);
});