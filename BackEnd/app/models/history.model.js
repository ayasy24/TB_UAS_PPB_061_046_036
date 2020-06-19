//app/models/book.models.js

const sql = require("./db.js");
const History = function(histories) {
  this.nama = histories.nama;
  this.alamat = histories.alamat;
};

//Mengambil semua data buku
History.getAll = result => {
  sql.query("SELECT * FROM history", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("result: ", res);
    result(null, res);
  });
};

// Mengambil buku yang memiliki id = BookId
History.findById = (id, result) => {
  sql.query(`SELECT * FROM history WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log(res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

// Mengambil buku yang memiliki Nama = Nama
History.findByNama= (nama, result) => {
    sql.query(`SELECT * from history where nama like '${nama}%'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("result: ", res);
        result(null, res);
    });
};

// Membuat data buku baru
// Membuat data buku baru
History.create = (newHistory, result) => {
  console.log(newHistory);
  sql.query(
    "INSERT INTO history (nama, alamat) VALUES (?,?)",
    [newHistory.nama, newHistory.alamat],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log(res);
      console.log("buat history: ", { id: res.insertId, ...newHistory });
      result(null, { id: res.insertId, ...newHistory });
    }
  );
};

// Mengupdate data buku yang memiliki id = id
History.updateById = (id, History, result) => {
  sql.query(
    "UPDATE History SET Nama = ?, Alamat = ? WHERE id = ?",
    [History.nama, History.alamat],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("update history: ", { id: id, ...History });
      result(null, { id: id, ...History });
    }
  );
};

// Menghapus buku yang memiliki id = id
History.remove = (id, result) => {
  sql.query("DELETE FROM History WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Book with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("hapus history dengan id: ", id);
    result(null, res);
  });
};

// Menghapus semua buku
History.removeAll = result => {
  sql.query("DELETE FROM History", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`Menghapus ${res.affectedRows} history`);
    result(null, res);
  });
};
module.exports = History;
