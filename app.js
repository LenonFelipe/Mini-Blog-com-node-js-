const express = require("express");
const mongoose = require("mongoose");
const app = express();
const {categorias} = require("./models/categoria");
const exphbs = require("express-handlebars");
const handlebars = exphbs.create({});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.get("/", (req,res) => {
    res.render("./layouts/main");
})

//ENV com dados do mongo
require("dotenv").config();

//Conexão com MongoDB
const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser: true
}).then(()=>{
    console.log("Mongo conectado");
}).catch((error)=>{
    console.log("Erro ao conectar" + error);
});

const PORT = process.env.PORT || 5005