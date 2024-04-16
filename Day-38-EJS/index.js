const express = require('express');
const app = express();
const path = require('path');

let port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req,res)=>{
    res.render("home.ejs");
});

app.get('/rolldice', (req,res)=>{
    let result = Math.floor(Math.random() *6)+1;
    res.render("rolldice.ejs", {result});
});

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});