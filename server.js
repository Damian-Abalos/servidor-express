const express = require('express');
const fs = require("fs");
const app = express();
const port = 8080;

let info;

let productoRandom;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const data = fs.readFile('./productos.txt', 'utf-8', (err, res) => {
    if (err) {
        throw new Error(`Error en lectura: ${err}`)
    } else {
        info = JSON.parse(res)
        console.log(info);
        let numeroRandom = getRandomInt(1,3)
        productoRandom = info.find((producto) => producto.id == numeroRandom)
        console.log(productoRandom);
        
    }
})


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
    res.send(info)
    res.send(
        
    )
})

app.get('/productoRandom', (req, res) => {
    
    res.send(productoRandom)
})

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`)
})
