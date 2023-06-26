const { Router } = require("express");
const router = Router();
const empresaControllers = require("../controllers/empresa.controllers");

router.get("/empresa", (req, res) => {
    const listaEmpresas = empresaControllers.buscar();
    listaEmpresas
        .then((empresas) => res.status(200).json(empresas))
        .catch((error) => res.status(400).json(error.message));
});

router.post("/empresa", (req, res) => {
    const novaEmpresa = req.body;
    const empresa = empresaControllers.criar(novaEmpresa);
    empresa
        .then((empresas) => res.status(201).json(empresas))
        .catch((error) => res.status(400).json(error.message));
});

router.put("/empresa/:id", (req, res) => {
    const { id } = req.params;
    const empresaAtualizada = req.body;
    const empresa = empresaControllers.atualizar(empresaAtualizada, id);
    empresa
        .then((resultempresaAtualizada) => res.status(200).json(resultempresaAtualizada))
        .catch((error) => res.status(400).json(error.message));
});

router.post("/empresa/:id", (req, res) => {
    const { id } = req.params;
    const empresa = empresaControllers.deletar(id);
    empresa
        .then((resultDeleteEmpresa) => res.status(200).json(resultDeleteEmpresa))
        .catch((error) => res.status(400).json(error.message));
});

module.exports = router;