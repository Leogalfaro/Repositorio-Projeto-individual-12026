var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM respostas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(usuario, pergunta, respostas) {
    var instrucao = `
        INSERT INTO respostas (fkUsuario, fkPergunta, id_resposta) VALUES ('${usuario}', '${pergunta}', '${respostas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};