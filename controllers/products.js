
var Product = require('../models/products'); //importamos el modelo de productos 
const controller ={
    home: function(req, res){
        return res.status(200).send({ //responder a la peticion con una vista 
            message: 'Hola mundo desde home'
        });
    },
    test: function(req, res){
        return res.status(200).send({ //responder a la peticion con una vista 
            message: 'Hola desde /test'
        });
       
    },
    saveProduct: function(req, res){ //funcion para guardar un producto anonima 
        var product = new Product(); //creacion de un nuevo producto
        var params = req.body; //obtenemos los datos del body de la peticion
        product.name = params.name; //asignamos el nombre del producto
        product.price = params.price; //asignamos el precio del producto
        product.descripcion = params.descripcion; //asignamos la descripcion del producto
        product.image = params.image; //asignamos la imagen del producto


        product.save((err, productStored)=>{ //err es el error, productStored es el producto guardado
            if(err){
                return res.status(500).send({message: 'Error al guardar el producto'});
            }
            if(!productStored){ //si no se guarda el producto
                return res.status(404).send({message: 'No se ha guardado el producto'});
            }
            return res.status(200).send({product: productStored}); //objeto producto guardado 
        }) //guardamos el producto en la base de datos


        // return res.status(200).send({
        //     product: product, //devolvemos el producto creado 
        //     message:"metodo saveproduct"}) //responder a la peticion con una vista
    },
    getProduct: function(req, res){
        var productId = req.params.id; //obtenemos el id del producto

        if(productId == null){ //si el id es nulo
            return res.status(404).send({message: 'El producto no existe'});
        }
        Product.findById(productId, (err, product)=>{ //buscamos el producto por id 
            if(err){
                return res.status(500).send({message: 'Error en la peticion de consulta de datos'});
            }
            if(!product){
                return res.status(404).send({message: 'El producto no existe'});
            }
            return res.status(200).send({product: product});
        }) //buscamos el producto por su id
    } //funcion para obtener un producto anonima

}
module.exports = controller; //exportamos el controlador para poder usarlo en index.js 
