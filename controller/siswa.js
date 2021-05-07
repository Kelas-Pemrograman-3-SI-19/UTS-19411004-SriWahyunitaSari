const siswamodel = require('../model/siswa')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) => {
    siswamodel.create(data)
    .then(() => {
        resolve ({
            status: true,
            pesan: 'Berhasil Input Data'
        })
    }).catch(() => reject ({
        status: false,
        pesan: 'Gagal Input Data'
    }))
})

exports.getAll = () =>
new Promise((resolve, reject) => {
    siswamodel.find()
    .then(result => {
        resolve ({
            status: true,
            pesan: 'Berhasil Menampilkan Data Siswa',
            result: result
        })
    }).catch(() => reject ({
        status: false,
        pesan: 'Gagal Mendapatkan Data Siswa',
        result: []
    }))
})

exports.getById = (id) =>
new Promise((resolve, reject) => {
    siswamodel.findOne({
        _id: objectId(id)
    }).then(result => resolve ({
        status: true,
        pesan: 'Berhasil Mendapatkan Data',
        result: result
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Mendapatkan Data',
        result: null
    }))
})

exports.update = (id, data) =>
new Promise((resolve, reject) => {
    siswamodel.updateOne({
        _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil Update Data'
    })).catch(() => reject ({
        status: false,
        pesan: 'Gagal Update'
    }))
})

exports.delete = (id) =>
new Promise((resolve, reject) => {
    siswamodel.deleteOne({
        _id: objectId(id)
    }).then(() => resolve ({
        status: true,
        pesan: 'Berhasil Hapus Data'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Hapus Data'
    }))
})