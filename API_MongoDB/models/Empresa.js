const mongoose = require("mongoose");

const { Schema } = mongoose;

const empresaSchema = new Schema({
    empresa: {
        type: String,
        required: true
    },
    funcionario: {
        nome: { type: String },
        salario: { type: Number },
        cargo: { type: String }
    },
});

const Empresa = mongoose.model("Empresa", empresaSchema);

module.exports = {
    Empresa,
    empresaSchema,
};