var bodyParser = require("body-parser")
var express = require("express")
var app = express()
var router = require("./router/routers")
var cors = require("cors");
const conectDatabase = require('./database/database').connectDatabase();

app.use(cors());

conectDatabase;

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/",router);

app.listen(8080,() => {
    console.log("Servidor rodando")
});