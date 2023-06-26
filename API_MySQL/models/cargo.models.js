const conexaodb = require("../conexao/conexao");

class CargoModel {
    listar() {
        const sql = "SELECT * FROM cargo";
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

    criar(novoCargo) {
        const sql = "INSERT INTO cargo SET ?";
        return new Promise((resolve, reject) => {
            conexaodb.query(sql, novoCargo, (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar cargo");
                    reject(error);
                }
                console.log("Sucesso Cargo");
                resolve(resposta);
            });
        });
    }
    
    atualizar(cargoAtualizado, id) {
        const sql = "UPDATE cargo SET ? WHERE idCargo = ?";
        return new Promise((resolve, reject) => {
            conexaodb.query(sql, [cargoAtualizado, id], (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar cargo");
                    reject(error);
                }
                console.log("Sucesso Atualizando Cargo");
                resolve(resposta);
            });
        });
    }

    deletar(id) {
        const sql = "DELETE FROM cargo WHERE idCargo = ?";
        return new Promise((resolve, reject) => {
            conexaodb.query(sql, id, (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar cargo");
                    reject(error);
                }
                console.log("Sucesso Deletando Cargo");
                resolve(resposta);
            });
        });
    }
}

module.exports = new CargoModel();