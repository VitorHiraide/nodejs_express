// Importando o Express na aplicação
const express = require("express"); //ComomonJS Modules
//Criando uma instância do Express
const app = express();

//CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.send("<h1>Hello world!<br> Bem-vindo!</h1><br><hr>");
});

//ROTA PERFIL
//perfil/:nome (os dois pontos indicam que o nome é um parâmetro obrigatório)
//perfil/:nome? (o ponto de interrogação (?) determina que o parâmetro é opcional)
app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome; //Coletando o parâmetro e guardando na variável
  //Verificando se o parametro nome existe
  if (nome) {
    res.send(`Olá ${nome}! Seja bem-vindo`);
  } else {
    res.send(`<h2>Faça o login para acessar seu perfil</h2>`);
  }
});

//ROTA DE VÍDEOS
//:playlist? e video? - parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist
  const video = req.params.video
  //Verificando se a playlist = true e video = undefined
  if (playlist && video == undefined){
    res.send(`<h2>Você está na playlist de ${playlist}.</h2>`)
  }
  //Verificando se os dois parâmetros = true
  if(playlist && video){
    res.send(`<h2>Você está na ppaylist de ${playlist}</h2><br>
      Reproduzindo o vídeo ${video}...`)
  // Se não for informado nenhum parâmetro
  }else {
    res.send(`<h1>Página de vídeos</h1>`)
  }
});

//Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso!`);
  }
});
