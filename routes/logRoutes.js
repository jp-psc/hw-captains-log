const express = require('express')

const router = express.Router()

const logController = require('../controllers/logController')

router.get('/', logController.index)


router.get('/new', (req, res) => {
    res.render('New')
})

router.post('/', logController.create)

router.get('/:id', logController.show)

module.exports = router