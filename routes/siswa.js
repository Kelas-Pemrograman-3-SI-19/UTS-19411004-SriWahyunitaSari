const router = require('express').Router()
const siswaController = require('../controller/siswa')

router.post('/insert', (req, res) => {
    siswaController.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getAll', (req, res) => {
    siswaController.getAll(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    siswaController.getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/update/:id', (req, res) => {
    siswaController.update(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/delete/:id', (req, res) => {
    siswaController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router