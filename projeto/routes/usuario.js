const express = require('express');
const app = express();
const {v4: uuidv4} = require("uuid");
const router = express.Router();

app.use(express.json())

const usuarios = [];

router.get('/usuario', (req, res) =>{
    return res.json(usuarios);
});

router.post('/usuario', (req, res) =>{

    const  {nome, CPF, idade, email, contato, endereco, senha, nomePet} = req.body;

    const usuario = { 
        id: uuidv4(),
        nome, 
        CPF, 
        idade, 
        email, 
        contato, 
        endereco,
        senha,
        nomePet
    }

    usuarios.push(usuario);

    return res.json(usuario);
})

router.put('/usuario/:id', (req, res) =>{
    const {id} = req.params;
    const  {nome, CPF, idade, email, contato, endereco, senha, nomePet} = req.body;

    const usuarioIndex = usuarios.findIndex(usuario => usuario.id === id)

    if(usuarioIndex < 0){
        return res.status(400).json({error: "Usuario Não encontrado"})
    }

    const usuario = {
        id,
        nome, 
        CPF, 
        idade, 
        email, 
        contato, 
        endereco,
        senha,
        nomePet
    }

    usuarios[usuarioIndex] = usuario;
    return res.json(usuario);
})

router.delete('/usuario/:id', (req, res) =>{

    const {id} = req.params;
    const usuarioIndex = usuarios.findIndex(usuario => usuario.id === id)

    if(usuarioIndex < 0){
        return res.status(400).json({error: "Usuario Não encontrado"})
    }

    usuarios.splice(usuarioIndex, 1);
    return res.json({msg: "Usuario deletado com sucesso"}).status(204)

})
module.exports = router
