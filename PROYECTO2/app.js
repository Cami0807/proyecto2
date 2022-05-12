
const express = require ("express");
const app = express ();


app.listen(3000, ()=> console.log ("fue Exitoso"));

const path = require ("path");

app.get ("/404", (req,res) => {
    res.send ("Error página no encontrada");
    });
    app.get ("/", (req,res) => {
    res.sendFiles(path.join(__dirname, "/views/home.html"));
    });
