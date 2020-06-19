//app/examples/insert.data.js
const sql=require("../models/db");
sql.query("INSERT INTO books VALUES(2,'title 2','desc','perpustakaan.png',current_timestamp());",(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Data berhasil ditambahkan:"+res.affectedRows);
    }
});