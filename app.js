
const express = require('express');
const app = express();
const port = 3000;

const rootModule = require('./modules/root');
const aboutModule = require('./modules/about');
const contactModule = require('./modules/contact');

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Node.js Application</h1><p>${rootModule('Christian Avenir')}</p>`);
});

app.get('/about', (req, res) => {
    res.send(`<h1>This is the About Page</h1><p>${aboutModule('Christian Avenir')}</p>`);
});

app.get('/contact', (req, res) => {
    res.send(`<h1>This is the Contact Page</h1><p>${contactModule('Christian Avenir')}</p>`);
});

app.get('/gallery', (req, res) => {
    res.send(`<h1>This is the Gallery Page</h1>`);
});

app.use((req, res) => {
    res.status(404).send(`<h1>Invalid Request</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
