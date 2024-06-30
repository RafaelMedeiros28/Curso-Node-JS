const express = require("express"); // importando o Express
const app = express(); // Iniciando o express



app.get("/", function(requisicao,resposta){
    resposta.send("Bem vindo ao meu site");
});


app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!");
});

app.get("/canal/youtube", function(req, res){
    res.send("<h1>Bem vindo ao meu canal!</h1>");
});

app.listen(4000, function(erro){
    if(erro) {
        console.log("Ocorreu um erro")
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
});

