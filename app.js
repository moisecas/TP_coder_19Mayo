const express = require('express'); //importamos express
const bodyParser = require('body-parser'); //importamos body-parser
const app=express(); //creacion de la aplicacion

//archivos de rutas 
const productsRoutes = require('./routes/products'); //importamos el archivo de rutas de productos

//middlewares ejecutan una funcion antes de que llegue a la ruta 
app.use(bodyParser.urlencoded({extended:false})); //middleware para el body-parser
app.use(bodyParser.json()); //todo lo que le lleuge la aplicacion se convierte en json 

//cors

//rutas 
app.use('/api', productsRoutes); //cargo ruta para el controlador de productos

// app.get('/test', (req, res)=>{ //req es la peticion, res es la respuesta 
//     res.status(200).send({message: 'Hola mundo desde mi servidor'}) //respuesta del servidor, json
// });

module.exports=app; //exportamos la aplicacion para poder usarla en index.js 