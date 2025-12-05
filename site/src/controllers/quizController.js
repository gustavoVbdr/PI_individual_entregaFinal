
var quizModel = require("../models/quizModel");
function cadastrarPontos(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var acertos = req.body.acertos;
    var erros = req.body.erros;

    if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("acertos está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("erros está undefined!");
    } else {
        quizModel.cadastrarTentativa(fkUsuario, acertos, erros)
            .then(function (resultado) {
                res.status(201).json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao cadastrar tentativa: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
function buscarEstatisticas(req, res) {
    var idUsuario = req.body.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {
        quizModel.listarTentativasPorUsuario(idUsuario)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado); 
                } else {
                    res.status(204).send("Nenhuma tentativa encontrada!");
                }
            })
            .catch(function (erro) {
                console.log("Erro ao buscar estatísticas: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
module.exports = {
    cadastrarPontos,
    buscarEstatisticas
};


