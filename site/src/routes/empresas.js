var express = require("express");
var router = express.Router();

var quizzcontroller = require("../controllers/empresaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/quizz", (req, res) => {
  quizzcontroller.analise(req, res)
} )

module.exports = router;