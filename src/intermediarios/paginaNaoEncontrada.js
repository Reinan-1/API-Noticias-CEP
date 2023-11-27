const paginaNaoEncontrada = (req, res, next) => {
    return res.status(404).json({ "mensagem": "Página não encontrada." })
}

module.exports = paginaNaoEncontrada;