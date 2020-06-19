//app/routes/book.routes.js
module.exports = app => {
    const history = require("../controllers/history.controller");
    
// cara mengakses gambar http://polibatam.ac.id/img/perpustakaan.png 

// Mengambil semua data
app.get("/api/history", history.findAll);

// Mengambil data buku yang memiliki id = id
app.get("/api/history/:id", history.findOne);

// Mengambil data buku yang memiliki genre = genre
app.get("/api/history/:nama", history.findNama);

// Membuat buku baru
app.post("/api/history/", history.create);

// Mengubah data buku yang memiliki id = id
app.put("/api/history/:id", history.update);

// Hapus data buku yang memiliki id = id
app.delete("/api/history/:id", history.delete);

// Hapus seluruh data
app.delete("/api/history/", history.deleteAll);

};