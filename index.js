const express = require('express')
const app = express()
const mongoose = require('mongoose')

//untuk konek database
mongoose.connect('mongodb://localhost:27017/nilai',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Berhasil Connect Database'))
.catch(() => console.log('Gagal Connect Database'))

app.use(express.json({
    extended: true,
    limit: '20mb'
}))
app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}))

app.use('/siswa', require('./routes/siswa'))

app.listen(3000, () => {
    console.log('server started')
})
