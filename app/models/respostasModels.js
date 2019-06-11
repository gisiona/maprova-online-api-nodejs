const mongoose = require('mongoose');

const RespostasSchema = new mongoose.Schema({
    codigo :{
        type: Number,
        required: true,
        unique: true,
    },
    descricao:{
        type:String,
        required: true,
        uppercase: true
    },
    data:{
        type: Date,
        required: true,
        default: Date.now
    }
});


module.exports = mongoose.model('Respostas', RespostasSchema);