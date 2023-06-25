const {Schema, model} = require('mongoose');

const InsumoSchema = Schema({
    nombre: {
        type: String,
        required: ['true', 'El nombre es obligatorio']
    },
    costoSaco: {
        type: String,
        required: ['true', 'El costo del saco es obligatorio']
    },
    cantidad: {
        type: String,
        required: ['true', 'La cantidad es obligatoria']
    },
    categoria: {
        type: String,
        required: ['true', 'La categoría es obligatoria']
    },
    descripcion: {
        type: String,
        required: ['true', 'La decripción es obligatoria']
    }
    
})

module.exports = model('Insumo', InsumoSchema);