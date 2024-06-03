const express = require('express');
const cors = require('cors');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const MaterialController = require('./controllers/MaterialController');
const AllController = require('./controllers/AllController');
const LowStockController = require('./controllers/LowStockController');

const app = express();
const port = 3050;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Aight its working');
});

// Rutas para usuarios
app.get('/user', UserController.indexGet);
app.post('/login', UserController.login);
app.post('/account', UserController.crearCuenta);

// Rutas para productos
app.get('/productos', ProductController.indexGet);
app.post('/productos/add', ProductController.insert);
app.get('/productos/:id', ProductController.consultById);
app.delete('/productos/del/:id', ProductController.delete);

// Rutas para materiales
app.get('/materiales', MaterialController.indexGet);
app.post('/materiales/add', MaterialController.insert);
app.get('/materiales/:id', MaterialController.consultById);
app.delete('/materiales/del/:id', MaterialController.delete);


// Ruta para obtener todos los productos y materiales
app.get('/all', AllController.indexGet);
app.get('/all/recent', AllController.indexGetRecent);
app.get('/all/:id/name', AllController.getNameById);
app.get('/all/:id/product/name', AllController.getProductNameById);
app.get('/all/:id/material/name', AllController.getMaterialNameById);
app.get('/all/search', AllController.search);
app.get('/all/:id', AllController.consultById);
app.post('/all/prodadd', AllController.addProduct);
app.post('/all/matadd', AllController.addMaterial);
app.delete('/all/del', AllController.deleteItem);

app.get('/lowstock', LowStockController.indexGet);

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
