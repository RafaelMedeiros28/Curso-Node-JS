const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const colors = require("colors");
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com banco de dados realizada com sucesso".blue)
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })



app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/perguntar", (req, res) => {
    res.render("index");
});

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    res.send("Formulário recebido! titulo: "  + titulo + " " + "descricao:" + " " + descricao);
});

app.listen(8080,() => {
    console.log("Aplicação inicializada com sucesso!".blue);
});