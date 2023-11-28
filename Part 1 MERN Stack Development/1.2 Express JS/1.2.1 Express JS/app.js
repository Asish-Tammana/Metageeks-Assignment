const express = require('express');
const { format } = require('date-fns')

const app = express();

// Define the middleware function
const printTimeStampsWithURL = (req, res, next) => {
    console.log(`${format(new Date(), "HH:mm:ss")} - ${req.method} ${req.url}`);
    next();
};

// sample API 1
app.get('/api1', printTimeStampsWithURL, (req, res) => {
    res.send('API 1');
});

// sample API 2
app.get('/api2', printTimeStampsWithURL, (req, res) => {
    res.send("API 2");
});

// sample API 3
app.get('/api3', printTimeStampsWithURL, (req, res) => {
    res.send("API 3");
});


// Start the server on a specific port
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
