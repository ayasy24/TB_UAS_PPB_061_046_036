//app/controllers/book.controller.js
const History=require("../models/history.model");

//Mengambil semua data buku 
exports.findAll=(req,res)=>{
    History.getAll((err,data)=>{
        if(err){
            res.status(500).send({message:err.message||"Terjadi kesalahan"});
        }else{ 
            res.send(data);
        }
    });
};

// Mengambil buku yang memiliki id = id
exports.findOne = (req, res) => {
    History.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `History dengan id ${req.params.id} tidak ditemukan`});
            } else {
                res.status(500).send({message: `Error ketika mengambil History dengan id ${req.params.id}`});
            }
        } else {
            res.send(data);
        }
    });
};

// Mengambil buku yang memiliki genre = genre
exports.findNama = (req, res) => {
    History.findByNama(req.params.nama, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `Nama dengan title ${req.params.nama} tidak ditemukan`});
            } else {
                res.status(500).send({message: `Error ketika mengambil History dengan nama ${req.params.nama}`});
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
    const histories = new History({nama: req.body.nama,alamat: req.body.alamat});
    History.create(histories, (err, data) => {
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
    History.updateById(req.params.id,new History(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `History dengan id ${req.params.id} tidak ditemukan`});
            } else {
                res.status(500).send({message: `Error ketika mengupdate History dengan id ${req.params.id}`});
            }
        } else {
            res.send(data);
        }
    });
};

// Menghapus buku yang memiliki id = id
exports.delete = (req, res) => {
    History.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({message: `History dengan id ${req.params.id} tidak ditemukan`});
            } else {
                res.status(500).send({message: `Error ketika menghapus History dengan id ${req.params.id}`});
            }
        } else res.send({ message: `Berhasil menghapus data History!` });
    });
};

// Menghapus semua buku
exports.deleteAll = (req, res) => {
    History.removeAll((err, data) => {
        if (err) {
            res.status(500).send({message:err.message || "Terjadi kesalahan"});
        }else {
            res.send({ message: `Berhasil menghapus seluruh data History!` });
        }
    });
};