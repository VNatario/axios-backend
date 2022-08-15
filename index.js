const express = require("express");

const app = express();

//middleware
app.use(express.json());

//ouvindo a porta 3000
app.listen("3000");
console.log("Rodando");
