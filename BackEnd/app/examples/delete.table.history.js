//app/examples/delete.table.js
const sql=require("../models/db");
sql.query("DROP TABLE history",(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Table berhasil dihapus");
    }
});