const express = require('express');
const app = express();
const {v4: uuidv4} = require("uuid");
const router = express.Router()

app.use(express.json()) // Permite utilizar json em mais de uma rota.

const pets = [];

/**
 * Query params - vamos utilizar para buscar informações especifícas ou toda a informação.
 * Route params - Utilizamos para identificar um recurso da nossa rota.
 * Request body - Serve para buscar o corpo da requisição que deve ser criada ou alterada.
 */

 router.get('/pet', (req, res) =>{
    return res.json(pets);
});

router.post('/pet', (req, res) =>{

    const  {nome, idade, raca, peso, vacina, castracao, 
            microChip, porte, is_adopted, url_imagem, nomeDono} = req.body; // traz o corpo da requisição.

    const pet = { 
        id: uuidv4(),
        nome, 
        idade, 
        raca, 
        peso, 
        vacina, 
        castracao, 
        microChip, 
        porte, 
        is_adopted, 
        url_imagem, 
        nomeDono
    }

    pets.push(pet);

    return res.json(pet); // sempre retornar o pet criado e não o vetor completo.
})

router.put('/pet/:id', (req, res) =>{
    const {id} = req.params;
    const  {nome, idade, raca, peso, vacina, castracao, 
        microChip, porte, is_adopted, url_imagem, nomeDono} = req.body;

    const petIndex = pets.findIndex(pet => pet.id === id)

    if(petIndex < 0){
        return res.status(400).json({error: "Pet Não encontrado"})
    }

    const pet = {
        id,
        nome, 
        idade, 
        raca, 
        peso, 
        vacina, 
        castracao, 
        microChip, 
        porte, 
        is_adopted, 
        url_imagem, 
        nomeDono
    }

    pets[petIndex] = pet;
    return res.json(pet);
})

router.delete('/pet/:id', (req, res) =>{

    const {id} = req.params;
    const petIndex = pets.findIndex(pet => pet.id === id)

    if(petIndex < 0){
        return res.status(400).json({error: "Pet Não encontrado"})
    }

    pets.splice(petIndex, 1);
    return res.json({msg: "Pet deletado com sucesso"}).status(204)

})


module.exports = router
// app.listen(port, _ => console.log(`Running at port: ${port}`));