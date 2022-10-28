const { model } = require('mongoose');
const Producto = require('../models/producto.model')

module.exports.get_all = (req, res) => {
    Producto.find()
        .then(productos => res.json(productos))
        .catch(err => res.json({message: "Hubo un error "+err}));
}


module.exports.get_product = (req, res) => {
    Producto.findOne({_id: req.params.id})
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Hubo un error "+err}));
}


module.exports.create_product = (req, res) => {
    Producto.create(req.body)
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Hubo un error "+err}));
}
//el new true regresa el documento que se esta modificando
// runValidators: true nos revisa las vallidaciones que vamos a tener 
module.exports.update_producto = (req, res) =>{
    Producto.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Hubo un error "+err}));
}

module.exports.delete_producto = (req, res) =>{
    Producto.deleteOne({_id: req.params.id})
    .then(result => res.json({result}))
    .catch(err => res.json({message: "Hubo un error "+err}));
}

