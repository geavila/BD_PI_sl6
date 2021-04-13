const express = require('express');
const app = express();
var path = require('path');
const port = process.env.PORT || 3000;

var pet = require('../routes/pet.js')
var usuario = require('../routes/usuario.js')

app.use(express.json());

app.use('/', pet)
app.use('/', usuario)


app.listen(port, _ => console.log(`Running at port: ${port}`))