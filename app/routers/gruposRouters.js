
const express = require('express');

const jwt = require('jsonwebtoken');
//const auth = require('../middlewares/authSecurityMiddleware')
const grupo = require('../models/grupoModels');

const router = express.Router();

const grupoController = require('../controllers/grupoControllers');
/*
const createToken = (userID) => {
    return jwt.sign({id: userID}, config.jwt_pass , {expiresIn: config.jwt_expired_in});
}

*/


//router.get('/grupos', grupoController.getAll); 
//router.get('/grupos/:id', grupoController.GetById); 
//router.post('/create/', grupoController.create); 
//router.put('/grupos/:id', grupoController.update); 
//router.delete('/grupos/:id', grupoController.delete); 

router.get('/getall', async (req, res) => {
    console.log(res.locals.auth_data);
    try{

        const grupos = await grupo.find({});
        return res.status(200).send( {grupos, retorno:{mensagem:'Dados retornado com sucesso'}});
    }catch(ex){
        return res.status(400).send({retorno: {error: +ex + 'Ocorreu um erro na consulta dos grupos.' }});       
    }
});


router.get('/GetById/:id', async (req, res)  => {
    try{
        const id = req.params.id
        console.log(id)
        id = req.body.id;
        console.log(id);
        
        const grupos = await grupo.findById(id);
        return res.status(200).send( {grupos, retorno:{mensagem:'Dados retornado com sucesso'}});
    }catch(ex){
        return res.status(400).send({retorno: {error: +ex + 'Ocorreu um erro na consulta dos grupos.' }});       
    }
});


router.get('/GetByPerguntaId/:id', (req, res)  => {
    return res.status(200).send({ mensagem: 'Rota /Grupos/GetByPerguntaId rodando na porta 3000'});
});


router.post('/create', async (req, res) => {
    try{
        const { codigoGrupo, descricaoGrupo } = req.body;
        console.log('CodigoGrupo : ' + codigoGrupo + ", " + "DescricaoGrupo: " + descricaoGrupo);

        if(!descricaoGrupo){
            return res.status(400).send({retorno: {codigo: 400,  error: 'Dados insuficientes, campo descrição obrigatório.'}});
        }
        
        const grupos = await grupo.create(req.body);
        
        return res.status(201).send({ grupos,
                                      mensagem: 'Dados cadastrado com sucesso.'
                                    });   

    }catch(ex){
        return res.status(400).send({retorno: {codigo: 400,  error: 'Falha na operação. Tente novamente.' }});        
    }    
});

module.exports = router;
