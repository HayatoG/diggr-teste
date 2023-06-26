const { Router } = require("express");
const router = Router();
const funcionarioControllers = require("../controllers/funcionario.controllers");

router.get("/funcionario", (req, res) => {
    const listaFuncionarios = funcionarioControllers.buscar();
    listaFuncionarios
        .then((funcionarios) => res.status(200).json(funcionarios))
        .catch((error) => res.status(400).json(error.message));
});

router.post("/funcionario", (req, res) => {
    const novoFuncionario = req.body;
    const funcionario = funcionarioControllers.criar(novoFuncionario);
    funcionario
        .then((funcionarios) => res.status(201).json(funcionarios))
        .catch((error) => res.status(400).json(error.message));
});

router.put("/funcionario/:id", (req, res) => {
    const { id } = req.params;
    const funcionarioAtualizado = req.body;
    const funcionario = funcionarioControllers.atualizar(funcionarioAtualizado, id);
    funcionario
        .then((resultfuncionarioAtualizado) => res.status(200).json(resultfuncionarioAtualizado))
        .catch((error) => res.status(400).json(error.message));
});

router.post("/funcionario/:id", (req, res) => {
    const { id } = req.params;
    const funcionario = funcionarioControllers.deletar(id);
    funcionario
        .then((resultDeleteFuncionario) => res.status(200).json(resultDeleteFuncionario))
        .catch((error) => res.status(400).json(error.message));
});

module.exports = router;