var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/registrar", function (req, res) {
    quizController.cadastrarPontos(req, res);
});
router.post("/estatisticas", function (req, res) {
    quizController.buscarEstatisticas(req, res);
});

module.exports = router;

