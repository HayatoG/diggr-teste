const conexaodb = require("../conexao/conexao");

class EmpresaModel {
    listar() {
        const sql = "SELECT * FROM empresa";
        return new Promise((resolve, reject) => {
            conexaodb.query(sql, {}, (error, resposta) => {
                if (error) {
                    console.log("Erro ao listar");
                    reject(error);
                }
                console.log("Sucesso Listar");
                resolve(resposta);
            });
        });
    }

    criar(novaEmpresa) {
        const sql = "INSERT INTO empresa SET ?";
        return new Promise((resolve, reject) => {
            conexaodb.query(sql, novaEmpresa, (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar empresa");
                    reject(error);
                }
                console.log("Sucesso empresa");
                resolve(resposta);
            });
        });
    }
    
    atualizar(empresaAtualizada, id) {
        const sql = "UPDATE empresa SET ? WHERE idEmpresa = ?";
        return new Promise((resolve, reject) => {
            conexaodb.query(sql, [empresaAtualizada, id], (error, resposta) => {
                if (error) {
                    console.log("Erro ao atualizar empresa");
                    reject(error);
                }
                console.log("Sucesso Atualizando empresa");
                resolve(resposta);
            });
        });
    }

    deletar(id) {
        const sql = "DELETE FROM empresa WHERE idEmpresa = ?";
        return new Promise((resolve, reject) => {
            conexaodb.query(sql, id, (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar empresa");
                    reject(error);
                }
                console.log("Sucesso Deletando empresa");
                resolve(resposta);
            });
        });
    }
}

module.exports = new EmpresaModel();