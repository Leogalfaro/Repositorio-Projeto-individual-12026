var express = require("express");
var router = express.Router();

var surveyController = require("../controllers/surveyController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /survey/cadastrar
    surveyControllerController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /survey/listar
    surveyController.listar(req, res);
});

module.exports = router;