//app/examples/insert.data.js
const sql = require("../models/db");
sql.query(
  "INSERT INTO history VALUES (NULL, 'nama', 'alamat', current_timestamp());",
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data berhasil ditambahkan: " + res.affectedRows);
    }
  }
);