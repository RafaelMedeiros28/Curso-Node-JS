const express = require("express"); // importando o Express
const app = express(); // Iniciando o express



app.get("/", function(requisicao,resposta){
    resposta.send("<strong>Bem vindo ao meu site!</strong>");
});


app.get("/blog/:artigo?", function(req, res){
    let artigo = req.params.artigo;
    if(artigo) {
        res.send("<h2>Artigo: " + artigo + " </h2>");
    } else {
        res.send("<h3>Artigo não definido</h3>")
    }
});

app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"];
    if(canal) {
        res.send(canal);
    } else {
        res.send("Nenhum canal fornecido!");
    }
    
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
