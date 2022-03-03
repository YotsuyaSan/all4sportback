let express = require('express');
let router = express.Router();
const { getProducts, getProductsByBatiment, getProductsByModule, getProductsByRangee, getProductsBySection, getProductByRef } = require('../controllers/produit.controller.js');

router.route('/').get((req, res) => {
    getProducts().then((products) => {
        res.send(products)
    })  
})

router.route('/getByBatiment:key').get((req, res) => {
    let idBatiment = req.params.key.substr(1, 1)
    getProductsByBatiment(idBatiment).then((products) => {
        res.send(products)
    })
})

router.route('/getProduit:id').get((req, res) => {
    getProductByRef(req.params.id).then((products) => {
        res.send(products)
    })
})

router.route('/getByModule:key').get((req, res) => {
    let idBatiment = req.params.key.substr(1, 1)
        idModule = req.params.key.substr(3, 1)
    getProductsByModule(idBatiment, idModule).then((products) => {
        res.send(products)
    })
})

router.route('/getByRangee:key').get((req, res) => {
    let idBatiment = req.params.key.substr(1, 1)
        idModule = req.params.key.substr(3, 1)
        idRangee = req.params.key.substr(4, 1)
    getProductsByRangee(idBatiment, idModule, idRangee).then((products) => {
        res.send(products)
    })
})

router.route('/getBySection:key').get((req, res) => {
    let idBatiment = req.params.key.substr(1, 1)
        idModule = req.params.key.substr(3, 1)
        idRangee = req.params.key.substr(4, 1)
        idSection = req.params.key.substr(5,1)
    getProductsBySection(idBatiment, idModule, idRangee, idSection).then((products) => {
        res.send(products)
    })
})

router.route('/getByEtagere:key').get((req, res) => {
    let idBatiment = req.params.key.substr(1, 1)
        idModule = req.params.key.substr(3, 1)
        idRangee = req.params.key.substr(4, 1)
        idSection = req.params.key.substr(5, 1)
        idEtagere = req.params.key.substr(7, 1)
    getProductsBySection(idBatiment, idModule, idRangee, idSection, idEtagere).then((products) => {
        res.send(products)
    })
})

module.exports = router;