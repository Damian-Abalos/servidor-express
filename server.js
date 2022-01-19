const express = require('express');
const Contenedor =  require('./contenedor')
const fs = require("fs");
const app = express();
const port = 8080;

const contenedor1 = new Contenedor("./productos.txt");

app.get('/', (req, res) => {
  res.send(`
  <h1>Bienvenidos al servidor Express </h1>
  <ul>
  <li><a href="http://localhost:${port}/productos">productos</a></li>
  <li><a href="http://localhost:${port}/productoRandom">producto random</a></li>
  </ul>
  `)
})

app.get('/productos', (req, res) => {
    res.send(contenedor1.getAll())
})

app.get('/productoRandom', (req, res) => {
    
    res.send(contenedor1.getRandom())
})

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`)
})
