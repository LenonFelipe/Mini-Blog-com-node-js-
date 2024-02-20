const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 5001;

//Conexão com MongoDB
const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser: true
}).then(()=>{
    console.log("Mongo conectado");
}).catch((error)=>{
    console.log("Erro ao conectar" + error);
});

app.get("/", (req, res) => {
    res.send("Servidor rodando na porta: "+ port);
});

app.listen(port, () => {
    console.log("Servidor reodando na porta: " + port);
});