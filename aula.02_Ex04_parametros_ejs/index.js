// Importando o Express na aplicação
const express = require("express"); //ComomonJS Modules
//Criando uma instância do Express
const app = express();

app.set("view engine", "ejs");

//CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome;
  res.render("perfil", {
    nome: nome,
  });
});

app.get("/videos/:playlist?", (req, res) => {
  const playlist = req.params.playlist;
  const listaVideos = [
    "Vídeos de Comédia",
    "Vídeos de Romance",
    "Vídeos do dia a dia",
  ];

  res.render("videos", {
    playlist: playlist,
    listaVideos: listaVideos,
  });
});

//Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso!`);
  }
});
