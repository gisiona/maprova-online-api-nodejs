
const express = require('express');
const router = express.Router();
//onst auth = require('../middleware/authSecurityMiddleware')

router.get('/Getall', (req, res) => {
    console.log(res.locals.auth_data);
    return res.status(200).send({ mensagem: 'Rota /Usuarios/GetAll rodando na porta 3000' });
});

router.get('/GetById', (req, res)  => {
    return res.status(200).send({ mensagem: 'Rota /Usuarios/GetById rodando na porta 3000'});
});

router.post('/New', (req, res)  => {
    const dados = req.body;
console.log(dados);
    return res.status(200).send({ mensagem: 'Rota /Usuarios/New rodando na porta', dados: {dados}});
});

module.exports = router;