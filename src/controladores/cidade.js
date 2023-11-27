const mostrarCidade = require("../utils/mostrarCidade");
const buscarNoticias = require("../servicos/buscarNoticias");

const mostrarNoticiasCidade = async (req, res) => {
    const { cep } = req.params;

    if (cep.length > 8) return res.status(400).json({ "mensagem": "Cep inválido." });

    try {
        const cidade = await mostrarCidade(cep);
        if (!cidade) return res.status(404).json({ "mensagem": "Cep não encontrado." });

        const noticias = await buscarNoticias(cidade);

        return res.json(noticias);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ "mensagem": "Erro interno do servidor." });
    }
}

module.exports = {
    mostrarNoticiasCidade
}