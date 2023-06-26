const conexaodb = require("../conexao/conexao");

class FuncionarioModel {
    listar() {
        const sql = "SELECT * FROM funcionario";
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

    criar(novoFuncionario) {
        const sql = "INSERT INTO funcionario SET ?";
        return new Promise((resolve, reject) => {
            conexaodb.query(sql, novoFuncionario, (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar funcionario");
                    reject(error);
                }
                console.log("Sucesso funcionario");
                resolve(resposta);
            });
        });
    }
    
    atualizar(funcionarioAtualizado, id) {
        const sql = "UPDATE funcionario SET ? WHERE idFuncionario = ?";
        return new Promise((resolve, reject) => {
            conexaodb.query(sql, [funcionarioAtualizado, id], (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar funcionario");
                    reject(error);
                }
                console.log("Sucesso Atualizando funcionario");
                resolve(resposta);
            });
        });
    }

    deletar(id) {
        const sql = "DELETE FROM funcionario WHERE idFuncionario = ?";
        return new Promise((resolve, reject) => {
            conexaodb.query(sql, id, (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar funcionario");
                    reject(error);
                }
                console.log("Sucesso Deletando funcionario");
                resolve(resposta);
            });
        });
    }
}

module.exports = new FuncionarioModel();