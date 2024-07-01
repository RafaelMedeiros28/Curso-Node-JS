const express = require("express"); // importando o Express
const app = express(); // Iniciando o express



app.get("/", function(requisicao,resposta){
    resposta.send("<strong>Bem vindo ao meu site!</strong>");
});


app.get("/blog", function(req, res){
    res.send("<strong>Bem vindo ao meu blog!</strong>");
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


app.get("/ola/:nome/:empresa", function(req, res){
    let nome = (req.params.nome);
    let empresa = (req.params.empresa);
    res.send("Olá " + nome  + " do " + empresa + "!");
});
