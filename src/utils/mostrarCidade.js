const mostrarCidade = async (cep) => {

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        
        if (!resposta.ok) throw new Error(`${resposta.status} - ${resposta.statusText}`);

        const data = await resposta.json();
        
        if (!data.localidade) throw new Error(`${resposta.status} - ${resposta.statusText}`);

        return data.localidade;

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = mostrarCidade;