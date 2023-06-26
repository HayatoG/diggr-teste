const funcionarioModel = require("../models/funcionario.models");
class FuncionarioController {
    buscar() {
        return funcionarioModel.listar();
    }
    criar(novoFuncionario) {
        return funcionarioModel.criar(novoFuncionario);
    }
    atualizar(funcionarioAtualizado, id) {
        return funcionarioModel.atualizar(funcionarioAtualizado, id);
    }
    deletar(id) {
        return funcionarioModel.deletar(id);
    }
}

module.exports = new FuncionarioController();