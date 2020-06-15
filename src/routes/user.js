const express = require('express')
const router = express.Router()

router.get('/', require('./../services/user/index'))
router.get('/new',require('./../services/user/new'))
router.get('/:id', require('./../services/user/show'))
router.post('/', require('./../services/user/create'))

router.put('/:id', require('./../services/user/update'))
router.delete('/:id', require('./../services/user/destroy'))

module.exports = router