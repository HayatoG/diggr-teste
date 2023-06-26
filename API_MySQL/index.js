const express = require("express");
const app = express();
const port = 3000;
const router = require("./rotas/rotas");

router (app, express);

app.listen(port, (error) => {
    if (error) {
        console.log("ERRO\n" + err);
        return;
    }
    console.log("Servidor Online!");
});