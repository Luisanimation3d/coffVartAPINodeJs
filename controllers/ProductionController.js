const { response } = require("express");
const Production = require("../models/ProductionModel");

const getProductions = async (req, res = response) => {
    try{
        const productions = await Production.find();
        console.log(productions);
        res.status(200).json({
            ok: true,
            productions
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener producciónes',
            error
        });
    }
}

const postProduction = async (req, res = response) => {
    const { insumo, productoFinal, cantidad, fechaInicio, estado } = req.body;
    console.log(req.body)
    const production = new Production({ insumo, productoFinal, cantidad, fechaInicio, estado });
    try {
        await production.save();
        res.status(201).json({
            ok: true,
            msg: 'Producción registrada correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al registrar producción',
            error
        });
    }
};

module.exports = {
    getProductions,
    postProduction
}