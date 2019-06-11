
const express = require('express');
const router = express.Router();
//onst auth = require('../middleware/authSecurityMiddleware')

router.get('/Getall', (req, res) => {
    console.log(res.locals.auth_data);
    return res.status(200).send({ mensagem: 'Rota /Respostas/GetAll rodando na porta 3000' });
});

router.get('/GetById/:id', (req, res)  => {
    return res.status(200).send({ mensagem: 'Rota /Respostas/GetById rodando na porta 3000'});
});

router.get('/GetByPerguntaId/:id', (req, res)  => {
    return res.status(200).send({ mensagem: 'Rota /Respostas/GetByPerguntaId rodando na porta 3000'});
});

module.exports = router;