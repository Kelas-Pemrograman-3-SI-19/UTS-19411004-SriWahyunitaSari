const mongoose = require('mongoose')
const Schema = mongoose.Schema

const siswaSchema = new Schema ({
    nomor_induk: {
        type: String
    },
    nama_lengkap: {
        type: String
    },
    kelas: {
        type: String
    },
    jurusan: {
        type: String
    },
    tahun_pelajaran: {
        type: String
    },
    mapel: {
        type: String
    },
    semester: {
        type: String
    },
    nilai: {
        type: String
    }
    
})

module.exports = mongoose.model('siswa', siswaSchema)