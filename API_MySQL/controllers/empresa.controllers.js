const empresaModel = require("../models/empresa.models")
class EmpresaController {
    buscar() {
        return empresaModel.listar();
    }
    criar(novaEmpresa) {
        return empresaModel.criar(novaEmpresa);
    }
    atualizar(empresaAtualizada, id) {
        return empresaModel.atualizar(empresaAtualizada, id);
    }
    deletar(id) {
        return empresaModel.deletar(id);
    }
}

module.exports = new EmpresaController();