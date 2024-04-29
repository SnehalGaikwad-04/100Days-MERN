const {faker} = require("@faker-js/faker");
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sigma_app',
    password: 'snehal',
});

try{
    connection.query('show tables', (err, result)=> {
        if(err) throw err;
        console.log(result);
    });
} catch(err){
    console.log('Error :'+err);
}

connection.end();

let getrandomuser = () => {
    return{
        id: faker.datatype.uuid(),
        username: faker.internet.username,
        email: faker.internet.email,
        password: faker.internet.password,
    };
};

console.log(getrandomuser());