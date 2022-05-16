const mongoose = require('mongoose');
const app=require('./app');//importamos el app 
const port=3000;//puerto de la aplicación

mongoose.Promise=global.Promise; 
mongoose.connect('mongodb://localhost:27017/productsEcommerce') //conexion a la base de datos localhost:27017/productsEcommerce  es el nombre de la base de datos
.then(()=>{
    console.log("conectado a la base de datos, vamos")
    //creacion del servidor
    app.listen(port, ()=>{ //levantando el servidor en el puerto 3000 usando listen, primero le paso el puerto y segundo va un callback, si la conexión se ha realizado conrrectamente o no
         console.log("servidor corriendo en el puerto", port) //respuesta de la conexion del servidor 
     })
})
.catch(err=>  console.log(err))
