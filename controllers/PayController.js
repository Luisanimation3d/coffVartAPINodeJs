const { response } = require("express");
const Pay = require("../models/PayModel");

const getPays = async (req, res = response) => {
    try{
        const pays = await Pay.find();
        console.log(pays);
        res.status(200).json({
            ok: true,
            pays
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener Pagos',
            error
        });
    }
}

const postPay = async (req, res = response) => {
    const { numeroContrato, montoPagado, fechaPago } = req.body;
    console.log(req.body)
    const pay = new Pay({ numeroContrato, montoPagado, fechaPago  });
    try {
        await pay.save();
        res.status(201).json({
            ok: true,
            msg: 'Pago Registrado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al Registrar Pago',
            error
        });
    }
};

module.exports = {
    getPays,
    postPay
}