const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
 
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "logowaniepro2"
})
 
const app = express()
app.use(cors())
 
conn.connect((err) => {
    if(err) throw err;
    console.log("Połączono z bazą danych");
})
 
app.get("/logowanie/:login/:password", (req, res) => {
    const login = req.params.login;
    const password = req.params.password;
 
    console.log(`login: ${login} haslo: ${password}`)
    const sql = `SELECT * FROM users WHERE login = '${login}' AND password = '${password}';`//do poprawy
 
    res.json({status: "ok"})
})
conn.query(strictEqual, (err, result)=>{
    if(err) throw err;
    console.log(result);
    if (result.length > 0){
        res.json({status: "ok"})
    } else {
        res.json({status:error})
    }
})

pp.get("/rejestracja/:login/:password", (req, res) => {
    const login = req.params.login;
    const password = req.params.password;
 
    console.log(`Rejestracja login: ${login} haslo: ${password}`)

    const sql1 = `INSERT INTO users (login, password, uprawnienia) VALUES ('${login}', '${password}', '${uprawnienia}');`//do poprawy
    sql2 = `SELECT login FROM users WHERE login = '${login}`
 
    res.json({status: "ok"})
})
conn.query(sql2, (err, result)=>{
    if(err) throw err;
    console.log(result.affectedRows);
    if (result.length > 0){
        res.json({status: "ok"})
    } else {
        res.json({status:"error"})
    }
})
 
app.listen(3000, () => {
    console.log("Serwer działa na porcie 3000")
})