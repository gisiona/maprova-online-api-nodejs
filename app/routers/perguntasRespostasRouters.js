
const express = require('express');
const router = express.Router();
//onst auth = require('../middleware/authSecurityMiddleware')

router.get('/GetByUsuarioId', (req, res)  => {
    return res.status(200).send({ mensagem: 'Rota /PerguntasRespostas/GetByUsuarioId rodando na porta 3000'});
});

router.post('/Atualizar', (req, res) => {
    console.log(res.locals.auth_data);
    return res.status(200).send({ mensagem: 'Rota /PerguntasRespostas/Atualizar rodando na porta 3000' });
});


router.post('/Salvar', (req, res) => {
    console.log(res.locals.auth_data);
    return res.status(200).send({ mensagem: 'Rota /PerguntasRespostas/Salvar rodando na porta 3000' });
});

module.exports = router;