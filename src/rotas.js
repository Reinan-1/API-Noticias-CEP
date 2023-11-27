const rotas = require("express").Router();

const { mostrarNoticiasCidade } = require("./controladores/cidade");
const paginaNaoEncontrada = require("./intermediarios/paginaNaoEncontrada");

rotas.get("/noticias/cidade/:cep", mostrarNoticiasCidade);

rotas.use(paginaNaoEncontrada);

module.exports = rotas;