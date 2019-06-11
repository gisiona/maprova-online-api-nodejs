

const mongoose = require('mongoose');

const grupo = mongoose.model('Grupos');


module.exports = {
    async getAll(req, res){
        //retornando os registro com paginacao, permitindo consultar pela pagina
        const { pageString = 1 } = req.query;

        const grupos = await grupo.paginate({}, {page: pageString, limit:10 });
        return res.json(grupos);
    },

    async getById(req, res){
        const grupo = await grupo.findById(req.params.id);
        return res.json(grupo);
    },

    async create(req, res){
        const grupo = await grupo.create(req.body);
        return res.json(grupo);
    },

    async update(req, res){
        // {new:true} = forca o mongoose retornar o registro atualizado
        const grupo = await grupo.findByIdAndUpdate(req.params.id, req.body, {new: true });
        return res.json(grupo);
    },

    async delete(req, res){
        const grupoById = await grupo.findByIdAndRemove(req.params.id);
        return res.send();
    }


}
