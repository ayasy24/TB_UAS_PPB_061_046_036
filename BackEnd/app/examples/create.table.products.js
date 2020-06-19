//app/examples/create.table.product.js
const sql = require("../models/db");
sql.query("CREATE TABLE products (id int NOT NULL AUTO_INCREMENT, "
    + "title VARCHAR(255) NOT NULL, description VARCHAR(255), "
    + "price VARCHAR(255), ipimg VARCHAR(255),"
    + "img VARCHAR(255), created_at TIMESTAMP "
    + "DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))"
    , (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Table berhasil dibuat");
        }
    }
);