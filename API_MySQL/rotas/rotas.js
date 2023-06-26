const routerEmpresa = require("./empresa.rotas");
const routerCargo = require("./cargo.rotas");
const routerFuncionario = require("./funcionario.rotas");

module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(routerCargo);
    app.use(routerEmpresa);
    app.use(routerFuncionario);
};