const { response } = require("express");
const User = require("../models/UserModel");

const getUsers = async (req, res = response) => {
    try{
        const users = await User.find();
        console.log(users);
        res.status(200).json({
            ok: true,
            users
        });
    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener usuarios',
            error
        });
    }
}

const postUser = async (req, res = response) => {
    const { name, tel, email, password, rol } = req.body;
    console.log(req.body)
    const user = new User({ name, tel, email, password, rol });
    try {
        await user.save();
        res.status(201).json({
            ok: true,
            msg: 'Usuario creado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear usuario',
            error
        });
    }
};

module.exports = {
    getUsers,
    postUser
}