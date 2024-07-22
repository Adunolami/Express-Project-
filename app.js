const express = require('express');
const app = express();
const Port = 4000;
const checkWorkingHours = require('./Middleware/checkWorkingHours');

app.set('view engine', 'pug');

app.use(checkWorkingHours);
app.use(express.static('public'));

//Define route

app.get('/',( req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/services', (req, res) => {
    res.render('/services', { title: 'Our Service' });
});

app.get('/contact', (req, res) => {
    res.render('Contact', { title: 'Contact Us' })
});



app.listen(Port, () => {
    console.log(`Server running on http:localhost:${Port}`)
});