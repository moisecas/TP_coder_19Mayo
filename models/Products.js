const mongoose = require('mongoose');
const schema = mongoose.Schema; 
const productSchema = new schema({ //molde para crear nuevos documentos dentro de mi base de datos 
    name:{type:String, required:true}, //nombre del producto
    price:{type:Number, required:true}, //precio del producto
    descripcion:{type:String, required:false}, //descripcion del producto
    image:{type:String, required:true}, //imagen del producto
})
module.exports = mongoose.model('product', productSchema); //entidad y esquema para crear nuevos documentos en la base de datos
