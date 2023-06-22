const {Schema, model} = require('mongoose');

const PaySchema = Schema({
    numeroContrato: {
        type: String,
        //debería tomarlo automaticamente cuando se da en el botón del datagrid del contrato
    },
    montoPagado: {
        type: String,
        required: ['true', 'El monto es obligatorio']
    },
    fechaPago: {
        type: String,
        //Esta fecha se registra automaticamente dependiendo 
    },
})

module.exports = model('Pay', PaySchema);