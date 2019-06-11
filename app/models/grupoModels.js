
const mongoose = require('mongoose');
// Trabalhar com paginacao
const mongoosePaginate = require('mongoose-paginate');

const GruposSchema = new mongoose.Schema({
       
        descricaoGrupo: {
            type:String,
            required: true
        },
        dataCadastro:{
            type: Date,
            required: true,
            default: Date.now
        }
});


GruposSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Grupos', GruposSchema);