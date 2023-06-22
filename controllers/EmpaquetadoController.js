const { response } = require("express");
const Empaquetado = require("../models/EmpaquetadoModel");

const getEmpaquetados = async (req, res = response) => {
    try{
        const empaquetados = await Empaquetado.find();
        console.log(empaquetados);
        res.status(200).json({
            ok: true,
            empaquetados
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener empaquetados',
            error
        });
    }
}

const postEmpaquetado = async (req, res = response) => {
    const { insumo, productoFinal, cantidad, fechaInicio, estado } = req.body;
    console.log(req.body)
    const empaquetado = new Empaquetado({ insumo, productoFinal, cantidad, fechaInicio, estado });
    try {
        await empaquetado.save();
        res.status(201).json({
            ok: true,
            msg: 'empaquetado registrado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al registrar empaquetado',
            error
        });
    }
};

module.exports = {
    getEmpaquetados,
    postEmpaquetado
}