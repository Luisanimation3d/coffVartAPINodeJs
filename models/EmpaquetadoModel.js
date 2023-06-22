const {Schema, model} = require('mongoose');

const EmpaquetadoSchema = Schema({
    insumo: {
        type: String,
        required: ['true', 'El insumo es obligatorio']
        //select
        //opciones: insumos del modulo insumo
    },
    productoFinal: {
        type: String,
        required: ['true', 'El producto final es obligatorio']
        //select
        //opcines: café 250gr, café 500gr, café 1Kg
    },
    cantidad: {
        type: String,
        required: ['true', 'La cantidad es obligatoria']
    },
    fechaInicio: {
        type: String,
        // se registra automaticamente con la creación
    },
    estado: {
        type: String,
        required: ['true', 'El estado es obligatorio']
        //select
        //opciones: En proceso, finalizado
    }
})

module.exports = model('Empaquetado', EmpaquetadoSchema);