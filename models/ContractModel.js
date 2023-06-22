const {Schema, model} = require('mongoose');

const ContractSchema = Schema({
    nombreEmpresa: {
        type: String,
        required: ['true', 'La empresa es obligatoria']
    },
    NIT: {
        type: String,
        required: ['true', 'El NIT de la empresa es obligatorio']
    },
    direccion: {
        type: String,
        required: ['true', 'La dirección es obligatoria']
    },
    nombreRepresentante: {
        type: String,
        required: ['true', 'El nombre es obligatorio']
    },
    correoRepresentante: {
        type: String,
        required: ['true', 'El correo es obligatorio']
    },
    producto: {
        type: String,
        required: ['true', 'El producto es obligatorio']
        //es un select
        //este tendrá varias opciones que son: café 250gr, café 500gr, café 1kg y café 2kg
    },
    comision: {
        type: String,
        //la comision no es obligatoria, debería ser un select con varios valores
        //10%-20%-30%-40% 
        //Porque no en todos los contratos se aplica comision por venta
    },
    duracion: {
        type: String,
        required: ['true', 'La duración es obligatoria']
        //es un select
        //opciones: indefinido, 6 meses, 1 año
    },
    cobro:{
        type: String,
        required: ['true', 'El cobro es obligatorio']
        //select 
        //opciones: quincenal, mensual, trimestral
        //validaciones: en base a lo que se eliga, cada que se cumpla 
        //se va a generar una alerta de atrasado o al día dependiendo del modulo de pagos
    },
    fecha: {
        type: String,
        //La fecha se va a registrar automaticamente con la creación del contrato
    },
})

module.exports = model('Contract', ContractSchema);