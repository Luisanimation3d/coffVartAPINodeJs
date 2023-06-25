const {Schema, model} = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: ['true', 'El nombre es obligatorio']
    },
    valorU: {
        type: String,
        required: ['true', 'El valor unitario es obligatorio']
    },
    insumo: {
        type: String,
        required: ['true', 'El insumo es obligatorio']
    },
    stockMin: {
        type: String,
        required: ['true', 'El stock minimo es obligatorio']
    },
    stockMax: {
        type: String,
        required: ['true', 'El stock máximo es obligatorio']
    },
    descripcion: {
        type: String,
        required: ['true', 'La decripción es obligatoria']
    }
    
})

module.exports = model('Product', ProductSchema);