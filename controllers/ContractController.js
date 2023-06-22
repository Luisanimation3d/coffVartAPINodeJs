const { response } = require("express");
const Contract = require("../models/ContractModel");

const getContracts = async (req, res = response) => {
    try{
        const contracts = await Contract.find();
        console.log(contracts);
        res.status(200).json({
            ok: true,
            contracts
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener Contratos',
            error
        });
    }
}

const postContract = async (req, res = response) => {
    const { nombreEmpresa, NIT, direccion, nombreRepresentante, correoRepresentante, producto, comision, duracion, cobro, fecha } = req.body;
    console.log(req.body)
    const contract = new Contract({ nombreEmpresa, NIT, direccion, nombreRepresentante, correoRepresentante, producto, comision, duracion, cobro, fecha  });
    try {
        await contract.save();
        res.status(201).json({
            ok: true,
            msg: 'Contrato creado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear contrato',
            error
        });
    }
};

module.exports = {
    getContracts,
    postContract
}