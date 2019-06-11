const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
//const requireDir = require('require-dir');

const config = require('./app/configs/config');
const app = express();

// CONFIGURACAO DO BODY-PARSER PARA RECEBER OS PARAMETROS PASSADO NO CORPO (BODY) DA REQUISICAO
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// HABILITANDO A API PARA RECEBER REQUISICAO DE OUTROS ENDERECOS QUE NAO SEJA O PROPRIO DA API.
app.use(cors());

// CONFIGURACAO DAS ROTAS DA API
const indexRouter               = require('./app/routers/indexRouters');
const perguntaRouter            = require('./app/routers/perguntasRouters');
const respostaRouter            = require('./app/routers/respostasRouters');
const usuarioRouter             = require('./app/routers/usuarioRouters');
const perguntaRespostaRouter    = require('./app/routers/perguntasRespostasRouters');
const grupoRouter               = require('./app/routers/gruposRouters');

app.use('/api/v1/',                     indexRouter);
app.use('/api/v1/perguntas/',           perguntaRouter);
app.use('/api/v1/respostas/',           respostaRouter);
app.use('/api/v1/usuarios/',            usuarioRouter);
app.use('/api/v1/perguntasrespostas/',  perguntaRespostaRouter);
app.use('/api/v1/grupos/',              grupoRouter);

// CONFIGURACAO DA CONEXAO COM O BANCO DE DADOS
const URL = config.url_bd;
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

mongoose.connect(URL, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (erro) => {
    console.log('ERRO NA CONEXÃO COM O BANCO DE DADOS ' + erro);
});

mongoose.connection.on('connected', () => {
    console.log('APLICAÇÃO CONECTADA COM SUCESSO DO BANCO DE DADOS ');
});

mongoose.connection.on('disconnected', () => {
    console.log('APLICAÇÃO DISCONECTADA COM SUCESSO DO BANCO DE DADOS ');
});

// HABILITANDO O CARREGAMENTO DAS PASTAS E ARQUIVOS PARA SEREM USADOS.
//requireDir('./models/');

const server = app.listen(process.env.PORT || 3000, function(){
    console.log('SERVIDOR RODANDO NA PORTA ' + process.env.PORT )
});


/*
app.get('/', (req, res) => {
    let query = req.query;
     // dados passado na url, ex:http://localhost:3000/?nome=GISIONA&idade=30
    res.send({mensagem: 'ROTA GET FUNCIONANDO CORRETAMENTE.', nome: query.nome, idade: query.idade });
});

app.post('/', (req, res) => {
    let query = req.query; // dados passado na url, ex:http://localhost:3000/?nome=GISIONA&idade=30
    console.log(query)
    res.send({mensagem: 'ROTA GET FUNCIONANDO CORRETAMENTE.', nome: query.nome, idade: query.idade });
});
*/

module.exports = app;