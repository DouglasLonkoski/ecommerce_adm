const express = require('express')
const router = express.Router()

const Customer = require('./../schemas/customer')
const isLoggedin = require('./../services/account/loggedin')
router.get('/', require('./../services/account/index'))

router.get('/new', (req, res) =>{
    const customer = new Customer()
    return res.render('account/new', {
        title: 'Registrar Conta',
        customer: customer,
        layout: 'layouts/main',
        user: req.user || undefined
    })
})

router.post('/', require('./../services/account/create'))
router.post('/login', require('./../services/account/login'))
router.get('/logout', require('./../services/account/logout'))
router.get('/:slug', isLoggedin, require('./../services/account/show'))
router.put('/:id', isLoggedin, require('./../services/account/update'))
module.exports = router