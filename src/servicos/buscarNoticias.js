const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

const buscarNoticias = async (q, pageSize = 5) =>{
    const resposta = await newsapi.v2.everything({
        q,
        language: 'pt',
        sortBy: 'relevancy',
        pageSize
    })

    const artigos = resposta.articles.map(artigo => {
        return {
            titulo: artigo.title,
            descricao: artigo.description,
            url: artigo.url
        }
    });

    return artigos;
}

module.exports = buscarNoticias;