const express = require('express');
const app = express();
const path = require('path');

let port = 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req,res)=>{
    res.send("home directory");
});

app.get('/ig/:username', (req,res)=>{

    let {username} = req.params;
    const instaData = require('./data.json');
    console.log(instaData);
    let data = instaData[username];
    if(data){
    res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
});

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});