//app/examples/create.table.product.js
const sql = require("../models/db");
sql.query("CREATE TABLE history (id int NOT NULL AUTO_INCREMENT, "
    + "nama VARCHAR(255) NOT NULL, alamat VARCHAR(255), "
    + "created_at TIMESTAMP "
    + "DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))"
    , (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Table berhasil dibuat");
        }
    }
);