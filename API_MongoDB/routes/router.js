const router = require("express").Router();

const empresaRouter = require("./empresa");

router.use("/", empresaRouter);

module.exports = router;