const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "borcvjkla6lrqdyy3jwf-mysql.services.clever-cloud.com",
    user: "u8mubff90hjxgmp8",
    password: "UOauo8tjzE62SDX7fG7R",
    database: "borcvjkla6lrqdyy3jwf"

});

connection.query(`select * from Products`, (err, res) =>{
    return console.log(res)
});  

connection.end()

