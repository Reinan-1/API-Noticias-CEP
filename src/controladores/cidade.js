const NewsAPI = require('newsapi');

const mostrarCidade = require("../utils/mostrarCidade");
const newsapi = new NewsAPI(process.env.API_KEY);

const mostrarNoticiasCidade = async (req, res) => {
    const { cep } = req.params;

    try {
        const cidade = await mostrarCidade(cep);
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
}

module.exports = {
    mostrarNoticiasCidade
}