const express = require('express')
const app = express()
const axios = require('axios')
const { connection, query} = require('./db')

var dbConfig = {
    host: "mysql",
    user: "root",
    password: "root",
    database: "nodedb"
};

app.get('/', async (req, res) => {

    const response = await axios.get('https://randomuser.me/api/');
    const name = response.data.results[0].name.first + ' ' + response.data.results[0].name.last;

    const conn = await connection(dbConfig).catch(e => {});

    await query(conn, "INSERT INTO people(name) VALUES (?) ", [[name]]);

    var ret = "<h1>Full Cycle Rocks!</h1>";
    ret += '<ul>';
    const results = await query(conn, 'SELECT * FROM people ORDER BY name').catch(console.log);
    results.forEach((v) => ret += `<li>${v.name}</li>`);
    ret += "</ul>";

    res.send(ret);
})

app.listen(3000, ()=> {
    console.log("Rodando na porta 3000")
})