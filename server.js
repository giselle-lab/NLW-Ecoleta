const express = require("express")/**esse "express" é o que instalamos */
const server = express()

//configurando o express para ver a pasta public
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar caminhos da minha aplicação
//pagina inicial
//uma regra http trabalha com verbos um deles é o get e o post, sao um jeito de conversar
//req: requisição (pedido)
//res: resposta
// o "/" esta sendo enviado uma funçao que recebe req e res
server.get("/",(req,res)=>{
    //res.sendFile(__dirname + "/views/index.html")//__dirname é uma variavel global que devolve o caminho
    return res.render("index.html",{title: "Um Titulo"})
})

//rota para a create-point
server.get("/create-point",(req,res)=>{
    //res.sendFile(__dirname + "/views/create-point.html")//__dirname é uma variavel global que devolve o caminho
    return res.render("create-point.html")
})

//rota para a create-point
server.get("/search",(req,res)=>{
    //res.sendFile(__dirname + "/views/create-point.html")//__dirname é uma variavel global que devolve o caminho
    return res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)//3000 é a porta