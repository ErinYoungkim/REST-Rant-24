require('dotenv').config();
const express = require('express');
const app = express();

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/', (req, res) => {
    res.render('error404');
});

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Load the places controller
app.use('/places', require('./controllers/places'))

// Wildcard/404 route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

