const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen("8000",()=>{
  console.log("servidor ativo")
})

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/atualizar",(req,res)=>{
  res.render("atualizar")
})

app.get('/consultar',(req,res)=>{
  res.render("consultar")
})
