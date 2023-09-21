const express = require('express');
const app = express();
const port = 3000;


// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
});

// Ruta para mostrar la lista de clientes
app.get('/clientes', (req, res) => {
  res.sendFile(`${__dirname}/views/clientes.html`)
});

// Ruta para mostrar la lista de productos
app.get('/productos', (req, res) => {
    res.sendFile(`${__dirname}/views/productos.html`)
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port} en http://localhost:3000`);
});

