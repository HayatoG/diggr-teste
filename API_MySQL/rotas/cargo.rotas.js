const { Router } = require("express");
const router = Router();
const cargoControllers = require("../controllers/cargo.controllers");

router.get("/cargo", (req, res) => {
    const listaCargos = cargoControllers.buscar();
    listaCargos
        .then((cargos) => res.status(200).json(cargos))
        .catch((error) => res.status(400).json(error.message));
});

router.post("/cargo", (req, res) => {
    const novoCargo = req.body;
    const cargo = cargoControllers.criar(novoCargo);
    cargo
        .then((cargos) => res.status(201).json(cargos))
        .catch((error) => res.status(400).json(error.message));
});

router.put("/cargo/:id", (req, res) => {
    const { id } = req.params;
    const cargoAtualizado = req.body;
    const cargo = cargoControllers.atualizar(cargoAtualizado, id);
    cargo
        .then((resultCargoAtualizado) => res.status(200).json(resultCargoAtualizado))
        .catch((error) => res.status(400).json(error.message));
});

router.post("/cargo/:id", (req, res) => {
    const { id } = req.params;
    const cargo = cargoControllers.deletar(id);
    cargo
        .then((resultDeleteCargo) => res.status(200).json(resultDeleteCargo))
        .catch((error) => res.status(400).json(error.message));
});

module.exports = router;