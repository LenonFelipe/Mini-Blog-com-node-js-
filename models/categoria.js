const mongoose = require("mongoose");

//Declarando o schema do banco, tudo que tive aqui dentro, estará no banco 

const categoriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const categorias = mongoose.models("categorias", categoriaSchema);

module.exports = { categorias }