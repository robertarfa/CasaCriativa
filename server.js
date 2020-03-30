//usei o express para criar e configurar meu servidor
const express = require('express');
const server = express();

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        url: "https://rocketseat.com.br"
    }
   

]

//configurar arquivos estaticos
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //para não guardar cache
})

//capturo o pedido do cliente para responder
//criei uma rota
server.get('/', function (req, res){

    const reversedIdeas = [...ideas].reverse()
   
    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", {ideas: lastIdeas})
})

server.get('/ideias', function (req, res){
    
    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", {ideas: reversedIdeas})
})


//liguei meu servidor porta 3000
server.listen(3000)