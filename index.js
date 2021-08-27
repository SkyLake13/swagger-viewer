const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const port = 3000;

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(3000, () => {
    console.log('Open http://localhost:3000 in browser.');
});