var surveyModel = require("../models/surveyModel");

var surveyModel = require("../models/surveyModel");

function listar(req, res) {
    surveyModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var usuario = req.body.usuario;
    var pergunta = req.body.pergunta;
    var respostas = req.body.respostas;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    surveyModel.cadastrar(usuario, pergunta, respostas).then(function(resposta){
        res.status(200).send("survey criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}