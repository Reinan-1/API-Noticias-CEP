const express = require("express");
const apiKey = require("../config.js");

const app = express();
const porta = 3000;

app.use(express.json());

app.get("/noticias/cidade/:cep", async (req, res) => {
    res.json({"teste":"testes"});
});


app.listen(porta, ()=> {console.log(`Rodando na porta ${porta}.`);});