//app/routes/book.routes.js
module.exports = app => {
    const products = require("../controllers/products.controller");

    // cara mengakses gambar http://polibatam.ac.id/img/perpustakaan.png 

    // Mengambil semua data
    app.get("/api/products", products.findAll);

    // Mengambil data buku yang memiliki id = id
    app.get("/api/products/:id", products.findOne);

    // Mengambil data buku yang memiliki genre = genre
    app.get("/api/products/:title", products.findTitle);

    // Membuat buku baru
    app.post("/api/products", products.create);

    // Mengubah data buku yang memiliki id = id
    app.put("/api/products/:id", products.update);

    // Hapus data buku yang memiliki id = id
    app.delete("/api/products/:id", products.delete);

    // Hapus seluruh data
    app.delete("/api/products", products.deleteAll);

};