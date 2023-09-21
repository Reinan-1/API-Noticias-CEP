const express = require("express");
const NewsAPI = require('newsapi');
require("dotenv").config();

const apiKey = process.env.API_KEY;
const newsapi = new NewsAPI(apiKey);
const app = express();
const porta = 3000;

app.use(express.json());

app.get("/noticias/cidade/:cep", async (req, res) => {
    const { cep } = req.params;

    try {
        const cidade = await getCidade(cep);
        if (!cidade) return res.status(404).json({ "mensagem": "Cep não encontrado." });

        const resposta = await newsapi.v2.everything({
            q: cidade,
            language: 'pt',
            sortBy: 'relevancy',
            pageSize: 5
        })

        const artigos = resposta.articles.map(artigo => {
            return {
                titulo: artigo.title,
                descricao: artigo.description,
                url: artigo.url
            }
        });

        return res.json(artigos);
    } catch (error) {
        console.log(error.message);
    }
});


app.listen(porta, () => console.log(`Rodando na porta ${porta}.`));

async function getCidade(cep) {

    try {
        const resposta = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
        if (!resposta.ok) throw new Error("404");

        const data = await resposta.json();

        if (!data.city) throw new Error("404");

        return data.city;

    } catch (error) {
        console.log(error.message);
    }
}
