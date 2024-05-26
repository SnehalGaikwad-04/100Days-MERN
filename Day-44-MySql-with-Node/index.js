const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'sigma_app',
    password:'snehal'
});

let getrandomuser = () => {
    return[
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

let query = 'INSERT INTO user (id, username, email, password) VALUES ?';
let data=[];
for(i=1; i<=100; i++){
    data.push(getrandomuser());
}

//Home Page
app.get('/', (req,res)=> {
    let q = `SELECT count(*) FROM user`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let count = (result[0]["count(*)"]);
            res.render("home.ejs", {count});
        });
    }catch(err){
        console.log(err);
        res.send("some error in db");
    }
});

//Show Route
app.get("/users", (req,res) => {
    let q= `SELECT * FROM user`;
    try{
        connection.query(q, (err, users) => {
            if(err) throw err;
            // let count = (result[0]["count(*)"]);
            // res.render("home.ejs", {count});
            // console.log(result);
            res.render("showusers.ejs", {users});
        });
    }catch(err){
        console.log(err);
        res.send("some error in db");
    }
});

//Edit Route
app.get("/user/:id/edit", (req,res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id= '${id}'`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", {user});
        });
    }catch(err){
        console.log(err);
        res.send("some error in db");
    }
});

//Update Route
app.patch("/user/:id", (req,res) => {
    let {id} = req.params;
    let {password: formpass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id= '${id}'`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            if(formpass != user.password){
                res.send("wrong password");
            }else {
                let q2 =`update user set username= '${newUsername}' where id = '${id}'`;
                    connection.query(q2, (err, result) => {
                        if(err) throw err;
                        res.send(result);
                    });
            }
        });
    }catch(err){
        console.log(err);
        res.send("some error in db");
    }
});

app.listen("8080", ()=> {
    console.log('server is running on 8080');
});
