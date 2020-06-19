//app/examples/select.data.js
const sql = require("../models/db");
sql.query("SELECT * FROM history", (err, res) => {
    if (err) {
        console.log("error: ", err);
    } else {
        console.log("result: ", res);
    }
}
);