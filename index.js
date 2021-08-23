const express = require('express');
const path = require("path");
const hbs = require("express-handlebars");
const favicon = require("serve-favicon");

const PORT = process.env.PORT || 5000;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.use(express.static("./public"));
app.use(favicon(__dirname + "/public/favicon.ico"));
app.engine("handlebars",hbs());
app.set("view engine","handlebars");


app.use("/",(req,res,next)=>{
    res.render("index");
})


app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}...`)
});

