# API de Notícias com Base no CEP 📰🌐

## 💻 Sobre o Projeto 
A API de Notícias com Base em CEP é uma aplicação que permite obter notícias com base em um CEP fornecido. Ela utiliza a API BrasilAPI para obter a cidade associada a um CEP e, em seguida, usa a API NewsAPI para buscar notícias relacionadas a essa cidade.

## 🚀 Deploy da Aplicação
A API está disponível em: [API-Notícias-CEP](https://amber-kangaroo-wig.cyclic.app/noticias/cidade/)

## 🛠️ Pré-requisitos 
Antes de começar, certifique-se de ter os seguintes requisitos:

- [Node.js](https://nodejs.org/en/download) instalado em seu sistema.
- Uma chave de API da NewsAPI. Você pode obter uma gratuitamente em https://newsapi.org/.

## ⚙ Funcionalidades 
- Recebe um CEP como entrada.
- Obtém a cidade associada a esse CEP usando a API BrasilAPI.
- Utiliza a cidade como consulta para buscar notícias relevantes na API NewsAPI.
- Retorna uma lista de notícias com títulos, descrições e URLs.

## 🧰 Tecnologias Usadas 
- [Node.js](https://nodejs.org/en/download): Plataforma de execução de código JavaScript.
- Express.js: Framework web para Node.js.
- [BrasilAPI](https://brasilapi.com.br/): API para informações relacionadas ao Brasil.
- [NewsAPI](https://newsapi.org/): API para notícias de todo o mundo.
- dotenv: Para gerenciar variáveis de ambiente.

## 🛣 Instruções de Uso 

Siga estas etapas para configurar e usar a API:

##### 1. Clone este repositório para o seu ambiente de desenvolvimento local:

```sh
git clone https://github.com/Reinan-1/API-Noticias-CEP.git
```

##### 2. Navegue até a pasta do projeto e instale as dependências:
   
```sh
cd sua-api-de-noticias
npm install
```
##### 3. Crie um arquivo .env na raiz do projeto e adicione sua chave de API da NewsAPI como uma variável de ambiente:

```
API_KEY=SUA_CHAVE_DE_API_DA_NEWSAPI
```
Substitua 'SUA_CHAVE_DE_API_DA_NEWSAPI' pela sua chave de API real da NewsAPI.

##### 4. Inicie o servidor da API:

```
npm start
```
##### 5. Acesse a API para obter notícias com base em um CEP. Substitua <CEP> pelo CEP desejado:

```
GET http://localhost:3000/noticias/cidade/<CEP>
```

Por exemplo:

```
GET http://localhost:3000/noticias/cidade/12345678
```
A resposta será uma lista de notícias relacionadas à cidade associada ao CEP.

## 🌟 Melhorias Futuras 
- Implementar cache para evitar consultas frequentes à API BrasilAPI.
- Adicionar mais parâmetros de pesquisa para personalizar ainda mais a busca de notícias.
- Melhorar o tratamento de erros e retornar códigos de status HTTP apropriados.

## 🤝 Contribuições 
Sinta-se à vontade para contribuir para este projeto de código aberto. Você pode enviar problemas, solicitações de recursos ou até mesmo fazer um fork do repositório e enviar suas próprias melhorias.




