//app/controllers/book.controller.js
const Product=require("../models/products.model");

//Mengambil semua data buku 
exports.findAll=(req,res)=>{
    Product.getAll((err,data)=>{
        if(err){
            res.status(500).send({message:err.message||"Terjadi kesalahan"});
        }else{ 
            res.send(data);
        }
    });
};

// Mengambil buku yang memiliki id = id
exports.findOne = (req, res) => {
    Product.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `Product dengan id (1) ${req.params.id} tidak ditemukan`});
            } else {
                res.status(500).send({message: `Error ketika mengambil Product dengan id  ${req.params.id}`});
            }
        } else {
            res.send(data);
        }
    });
};

// Mengambil buku yang memiliki genre = genre
exports.findTitle = (req, res) => {
    Product.findByTitle(req.params.title, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `Product dengan title ${req.params.title} tidak ditemukan`});
            } else {
                res.status(500).send({message: `Error ketika mengambil product dengan title ${req.params.title}`});
            }
        } else {
            res.send(data);
        }
    });
};

// Membuat data buku baru
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Content tidak boleh kosong"});
    }
    const products = new Product({title: req.body.title,description: req.body.description, price: req.body.price, ipimg: req.body.ipimg, img: req.body.img});
    Product.create(products, (err, data) => {
        if (err) {
            res.status(500).send({message:err.message || "Terjadi kesalahan"});
        }else {
            res.send(data);
        }
    });
};


// Mengupdate data buku yang memiliki id = id
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Content tidak boleh kosong"});
    }
    Product.updateById(req.params.id,new Product(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `Product dengan id (3) ${req.params.id} tidak ditemukan`});
            } else {
                res.status(500).send({message: `Error ketika mengupdate Product dengan id ${req.params.id}`});
            }
        } else {
            res.send(data);
        }
    });
};

// Menghapus buku yang memiliki id = id
exports.delete = (req, res) => {
    Product.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `Product dengan id (4) ${req.params.id} tidak ditemukan`});
            } else {
                res.status(500).send({message: `Error ketika menghapus product dengan id ${req.params.id}`});
            }
        } else res.send({ message: `Berhasil menghapus data Product!` });
    });
};

// Menghapus semua buku
exports.deleteAll = (req, res) => {
    Product.removeAll((err, data) => {
        if (err) {
            res.status(500).send({message:err.message || "Terjadi kesalahan"});
        }else {
            res.send({ message: `Berhasil menghapus seluruh data Product!` });
        }
    });
};