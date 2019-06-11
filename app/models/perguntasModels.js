const mongoose = require('mongoose');
// Trabalhar com paginacao
const mongoosePaginate = require('mongoose-paginate');

const PerguntasSchema = new mongoose.Schema({  
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

PerguntasSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Perguntas', PerguntasSchema);


