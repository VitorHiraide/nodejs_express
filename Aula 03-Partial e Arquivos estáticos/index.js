// Importando o Express na aplicação
const express = require("express"); //ComomonJS Modules
//Criando uma instância do Express
const app = express();

// Definindo o ejs como renderizador de páginas
app.set("view engine", "ejs");

//Definindo a pasta dos arquivos estáticos (public)
app.use(express.static("public"));

//CRIANDO A ROTA PRINCIPAL
app.get("/", function (req, res) {
  //Será renderizada a página index.ejs que está na pasta 'views'
  res.render("index");
});

//ROTA PERFIL
//perfil/:nome (os dois pontos indicam que o nome é um parâmetro obrigatório)
app.get("/perfil", (req, res) => {
  res.render("perfil");
});

//ROTA DE VÍDEOS
app.get("/videos", (req, res) => {
  res.render("videos");
});

//ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];
  const produto = req.params.produto;
  res.render("produtos", {
    //Enviadno variável para a página
    // (produto esquerda)Será chamado na página
    produto: produto, //(produto direita)Variável está na index (req.params)
    listaProdutos: listaProdutos,
    //Na página produtos.ejs haverá uma testagem de condição
  });
});

//ROTA DE PEDIDOS
app.get("/pedidos", (req, res) => {
  //ARRAY DE OBJETOS COM OS PEDIDOS
  const pedidos = [
    { produto: "Celular", valor: 3000 },
    { produto: "Computador", valor: 4000 },
    { produto: "Tablet", valor: 2000 },
    { produto: "Notebook", valor: 3500 },
  ];
  res.render("pedidos", {
    //ENVIANDO O ARRAY DE OBJETOS PARA A PÁGINA
    pedidos: pedidos,
  });
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
