/*
fichero del controlador de rutas prodcucts.js. 
La carpeta Routes se crea para guardar los archivos 
de rutas para cada una de las vistas o controladores
*/ 
const express = require('express'); //importamos express 
const productsController = require('../controllers/products'); //importamos el controlador de productos

const router = express.Router(); //creamos una instancia de express 
router.get('/home', productsController.home); //ruta para la vista home, accedo al metodo que he creado en el controlador de productos
router.get('/test', productsController.test); //ruta para la vista test, accedo al metodo que he creado en el controlador de productos
router.post('/save-product', productsController.saveProduct); //ruta para guardar un producto, accedo al metodo que he creado en el controlador de productos para guardar productos
router.get('/product/:id?', productsController.getProduct); //ruta para obtener un producto, accedo al metodo que he creado en el controlador de productos para obtener productos

module.exports = router; //exportamos el router para poder usarlo en app.js