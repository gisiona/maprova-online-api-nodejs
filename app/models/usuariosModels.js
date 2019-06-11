const mongoose = require('mongoose');

const UsuariosSchema = new mongoose.Schema({
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
    },
    data:{
        type: Date,
        default: Date.now
    },
    senha:{
        type: String,
        required:true
    }
});


module.exports = mongoose.model('Usuarios', UsuariosSchema);