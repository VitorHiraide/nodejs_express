// Importando o Express na aplicação
const express = require("express"); //ComomonJS Modules
//Criando uma instância do Express
const app = express();

//CRIANDO A ROTA PRINCIPAL
app.get("/", function(req, res){
    res.send("<h1>Hello world!<br> Bem-vindo!</h1><br><hr>")
})

//ROTA PERFIL
//perfil/:nome (os dois pontos indicam que o nome é um parâmetro obrigatório)
app.get("/perfil/:nome", (req,res) =>{ 
  const nome = req.params.nome    //Coletando o parâmetro e guardando na variável
  res.send(`Olá ${nome}! Seja bem-vindo`)
})

//ROTA DE VÍDEOS
app.get("/videos", (req,res) => {
  res.send("<h1>Página de vídeos</h1>")
})

//Iniciando o servidor na porta 8080
app.listen(8080, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso!`);
  }
});