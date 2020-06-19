//app/examples/insert.data.js
const sql = require("../models/db");
sql.query("INSERT INTO products VALUES(NULL,'title','desc','price', 'perpustakaan.png','perpustakaan.png',current_timestamp());", (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data berhasil ditambahkan:" + res.affectedRows);
    }
});