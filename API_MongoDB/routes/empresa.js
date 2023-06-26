const router = require("express").Router();

const empresaController = require("../controllers/empresaController");

router
    .route("/empresa")
    .post((req, res) => empresaController.create(req, res));

router
    .route("/empresas")
    .get((req, res) => empresaController.getAll(req, res));

router
    .route("/empresas/:id")
    .get((req, res) => empresaController.get(req, res));

router
    .route("/empresas/:id")
    .delete((req, res) => empresaController.delete(req, res));

router
    .route("/empresas/:id")
    .put((req, res) => empresaController.update(req, res));

module.exports = router;