const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'sigma_app',
    password:'snehal'
});

try{
    connection.query('SHOW TABLES',(err, res) => {
        if(err) throw err;
        console.log(res);
    });
}catch(err){
    console.log(err);
}
connection.end();
 
let getrandomuser = () => {
    return{
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};

console.log(getrandomuser());
