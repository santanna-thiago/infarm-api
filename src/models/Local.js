import mongoose from "mongoose";

const locaisSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        email: {type: String, required: true},
        telefone: {type: Number, required: true},
        cidade: {type:String, required: true},
        estado: {type:String, required: true},
        produtos: {type:String, required: true},
        capacidade: {type: Number, required: true}
    } 
);

const locais = mongoose.model('locais', locaisSchema);

export default locais