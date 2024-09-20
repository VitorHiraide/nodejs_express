// Importando o Express na aplicação
// const express = require("express"); //ComomonJS Modules
import express from "express"; //ES6 Modules
//Criando uma instância do Express
const app = express();

// Importando os controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";

// Definindo o ejs como renderizador de páginas
app.set("view engine", "ejs");

//Definindo a pasta dos arquivos estáticos (public)
app.use(express.static("public"));

// Definindo o uso das rotas que estão nos Controllers
app.use("/", ClientesController); //informando para utilizar todas as (/) que estarão dentro do ClientesController

//CRIANDO A ROTA PRINCIPAL
app.get("/", function (req, res) {
  //Será renderizada a página index.ejs que está na pasta 'views'
  res.render("index");
});

//Iniciando o servidor na porta 8080 através de um link
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
