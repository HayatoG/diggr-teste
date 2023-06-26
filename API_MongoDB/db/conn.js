const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect('mongodb://localhost/bdEmpresa');
        console.log("Conectado ao Banco");
    } catch (console) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main