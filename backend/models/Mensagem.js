const mongoose = require("mongoose")
const Schema = mongoose.Schema

const mensagemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'O nome é obrigatório']
    },
    email: {
        type: String,
        required: [true, 'O email é obrigatório']
    },
    mensegem: {
        type: String,
        required: [true, 'A mensagem é obrigatória']
    }
}, {timestamps: true})

const Mensagem = mongoose.model("Mensagem", mensagemSchema);

module.exports = Mensagem