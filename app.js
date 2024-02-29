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

// Definindo como false para nao haver problemas  
mongoose.set('strictQuery', false);


//Conexão com MongoDB
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://lenonfelipe98:12348@cluster0.7c0ovrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser: true
}).then(()=>{
    console.log("Mongo conectado");
}).catch((error)=>{
    console.log("Erro ao conectar" + error);
});

const PORT = process.env.PORT || 5005