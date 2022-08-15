const express = require("express");
const axios = require("axios");

const app = express();

//middleware
// app.use(express.json());

//ouvindo a porta 3000
app.listen("3000");
console.log("1... 2... 3... rodando");

app.route("/").get((req, res) => {
  axios
    .get("https://api.github.com/users/VNatario")
    .then((result) => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch((e) => console.error(e));
});
