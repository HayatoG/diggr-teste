const cargoModel = require("../models/cargo.models");
class CargoController {
    buscar() {
        return cargoModel.listar();
    }
    criar(novoCargo) {
        return cargoModel.criar(novoCargo);
    }
    atualizar(cargoAtualizado, id) {
        return cargoModel.atualizar(cargoAtualizado, id);
    }
    deletar(id) {
        return cargoModel.deletar(id);
    }
}

module.exports = new CargoController();