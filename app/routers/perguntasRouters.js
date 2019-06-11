const express = require('express');
const jwt = require('jsonwebtoken');

const pergunta = require('../models/perguntasModels');

const router = express.Router();

router.get('/getall', async (req, res) => {
    console.log(res.locals.auth_data);
    try{
        const perguntas = await pergunta.find({});
        return res.status(200).send( {perguntas, retorno:{mensagem:'Dados retornado com sucesso'}});
    }catch(ex){
        return res.status(400).send({retorno: {error: 'Ocorreu um erro na consulta das perguntas.' }});       
    }
});


router.get('/getbyid/:id', async (req, res)  => {
    try{
        const id = req.params.id
        const pergunta_ = await pergunta.findById(id);
        console.log(pergunta_)
        return res.status(200).send( {pergunta_, retorno:{mensagem:'Dados retornado com sucesso'}});
    }catch(ex){
        return res.status(400).send({retorno: {error: +ex + 'Ocorreu um erro na consulta da pergunta.' }});       
    }
});

router.post('/create', async (req, res) => {
    try{
        const { descricao } = req.body;
        console.log("descricao: " + descricao);

        if(!descricao){
            return res.status(400).send({retorno: {codigo: 400,  error: 'Dados insuficientes, campo descrição obrigatório.'}});
        }
        
        const perguntas = await pergunta.create(req.body);
        
        return res.status(201).send({ perguntas,
                                    retorno: {mensagem: 'Dados cadastrado com sucesso.'}
                                    });   

    }catch(ex){
        return res.status(400).send({retorno: {codigo: 400,  error: 'Falha na operação. Tente novamente.' }});        
    }    
});



router.put('/update', async (req, res) => {
    try{
        const { id, descricao } = req.body;
        console.log("descricao: " + descricao, + " id: " + id );

        if(!descricao || !id){
            return res.status(400).send({retorno: {error: 'Dados insuficientes, campos id e descrição obrigatório.'}});
        }
        
        const perguntas = await pergunta.findByIdAndUpdate(id, req.body, {new: true });
        
        return res.status(200).send({ perguntas,
                                    retorno: {mensagem: 'Dados atualizados com sucesso.'}
                                    });   

    }catch(ex){
        return res.status(400).send({retorno: {codigo: 400,  error: 'Falha na operação. Tente novamente.' }});        
    }    
});


router.delete('/delete/', async (req, res) => {
    try{
        const { id } = req.body;
        console.log( "id:"+ id );

        if(!id){
            return res.status(400).send({retorno: {error: 'Dados insuficientes, campo id obrigatório.'}});
        }
        
        const perguntas = await pergunta.findByIdAndDelete(id);
        console.log(perguntas)
        return res.status(200).send({ 
                                        retorno: {mensagem: 'Dado removido com sucesso.'}
                                    });   

    }catch(ex){
        return res.status(400).send({retorno: {codigo: 400,  error: 'Falha na operação. Tente novamente.' }});        
    }    
});


module.exports = router;