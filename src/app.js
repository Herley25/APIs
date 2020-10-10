const app = require("express")(); // recebe uma instância do express
const bodyParser = require("body-parser"); // nos permite que enviamos dados para nossa API

const produtos = [];
// configuração do bory-parser
app.use(bodyParser.json()); // a partir conseguimos receber dados em formato json

// Endponts
// Cadastro
app.post("/produtos",(req, resposta) => {
    const produto = {
        nome: req.body.nome,
        fabricante: req.body.fabricante, 
        aprendiz: req.body.aprendiz 
    };

    produtos.push(produto); 
    // salvando no banco de dados
    resposta.statusCode = 200;
    resposta.send();
});

// listagem geral de produto
app.get("/produtos", (req, resposta) => { // criando uma rota get para dados, proms (req, resposta)
    resposta.statusCode = 200;
    resposta.send(produtos);
});


// aplicação express
app.listen(8080,() => {
    console.log("Olá Mundo, API rodando!");
}) 

