const express = require('express');
const os = require('os');
const db = require('./db');

const app = express();
const instance = process.env.INSTANCE_NAME || require('os').hostname();
app.get('/', (req, res) => {
  res.send(`¡Hola desde ${instance}!`);
});

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      res.status(500).send('Error en la base de datos');
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor Node.js iniciado en puerto 3000');
});
