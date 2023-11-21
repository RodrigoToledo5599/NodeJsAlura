import http from "http";

const PORT = 3000;
const rotas ={
    "/" : "entrei na rota home",
    "/account" : "entrando na conta da bicha q logou agr EUHUEUHEUHEUHEUH"
}

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end(rotas[req.url]);


})

server.listen(PORT, () =>{
    console.log("conectado231313 !");
})