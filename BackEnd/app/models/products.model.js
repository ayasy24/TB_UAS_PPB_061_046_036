//app/models/book.models.js

const sql = require("./db.js");
const Product = function(products) {
  this.title = products.title;
  this.description = products.description;
  this.price = products.price;
  this.ipimg = products.ipimg;
  this.img = products.img;
};

//Mengambil semua data buku
Product.getAll = result => {
  sql.query("SELECT * FROM products", (err, res) => {
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
Product.findById = (id, result) => {
  sql.query(`SELECT * FROM Products WHERE id = ${id}`, (err, res) => {
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

// Mengambil buku yang memiliki title = title
Product.findByTitle = (title, result) => {
    sql.query(`SELECT * from Products where title like '${title}%'`, (err, res) => {
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
Product.create = (newProduct, result) => {
  console.log(newProduct);
  sql.query(
    "INSERT INTO products (title, description, price, ipimg, img) VALUES (?,?,?,?,?)",
    [newProduct.title, newProduct.description, newProduct.price, newProduct.ipimg, newProduct.img],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log(res);
      console.log("buat product: ", { id: res.insertId, ...newProduct });
      result(null, { id: res.insertId, ...newProduct });
    }
  );
};

// Mengupdate data buku yang memiliki id = id
Product.updateById = (id, Product, result) => {
  sql.query(
    "UPDATE Products SET title = ?, description = ?, price = ?, ipimg = ?, img = ? WHERE id = ?",
    [Product.title, Product.description, Product.price, Product.ipimg, Product.img, id],
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
      console.log("update buku: ", { id: id, ...Product });
      result(null, { id: id, ...Product });
    }
  );
};

// Menghapus buku yang memiliki id = id
Product.remove = (id, result) => {
  sql.query("DELETE FROM Products WHERE id = ?", id, (err, res) => {
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
    console.log("hapus product dengan id: ", id);
    result(null, res);
  });
};

// Menghapus semua buku
Product.removeAll = result => {
  sql.query("DELETE FROM Products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`Menghapus ${res.affectedRows} buku`);
    result(null, res);
  });
};
module.exports = Product;
