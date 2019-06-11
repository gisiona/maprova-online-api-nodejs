const mongoose = require('mongoose');

const PerguntasRespostasSchema = new mongoose.Schema({
    codigo :{
        type:  Number,
        required: true,
        unique: true,
    },
    perguntas:{
        codigo: {
            type: Number,
            required: true
        },
        descricaoPergunta: {
            type: String,
            required: true
        }
    },
    grupos:{
        codigoGrupo:{
            type: Number,
            require:true
        },
        descricaoGrupo: {
            type:String,
            required: true,
            uppercase: true            
        },
    respostas:{
        codigo: {
            type: Number
        },
        descricao:{
            type:String
        }
    },
    usuarios:{
        codigo: { 
            type: Number,
            required: true
        },
        nome: {
            type: String,
            uppercase: true
        },
        email:{
            type: String,
            require: true,
            unique: true
        },
        telefone:{
            type: String,
            required:true,
        }
    },
    data:{
        type: Date,
        required: true,
        default: Date.now
    },
  
    }
});


module.exports = mongoose.model('PerguntasRespostas', PerguntasRespostasSchema);