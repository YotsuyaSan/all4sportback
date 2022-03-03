let express = require('express');
const { getProductsByBatiment } = require('../controllers/produit.controller.js');
    router = express.Router();
    batiment = require('../controllers/batiment.controller.js');
    modules = require('../controllers/module.controller.js');
    rangee = require('../controllers/rangee.controller.js');
    section = require('../controllers/section.controller.js');
    etagere = require('../controllers/etagere.controller.js');
    produit = require('../controllers/produit.controller.js');

router.route('/').get((req, res) => {
    batiment.getBatiments().then((json) => {
        res.send(json)
    })
})

router.route('/:ba_id').get((req, res) => {
    getProductsByBatiment(req.params.ba_id).then(json => {
        console.log(json)
        res.send(json) 
    })
})

router.route(':ba_id/products').get((req, res) => {
    batiment.findBatimentProduits().then(json => {
        res.send(json) 
    })
})

router.route('/:ba_id/:mo_id').get((req, res) => {
    rangee.getRangees(req.params.ba_id, req.params.mo_id).then(json => {
        res.send(json)
    })
})

router.route('/:ba_id/:mo_id/:ra_id').get((req, res) => {
    section.getSections(req.params.ba_id, req.params.mo_id, req.params.ra_id).then(json => {
        res.send(json)
    })
})

router.route('/:ba_id/:mo_id/:ra_id/:se_id').get((req, res) => {
    etagere.getEtageres(req.params.ba_id, req.params.mo_id, req.params.ra_id, req.params.se_id).then(json => {
        res.send(json)
    })
})

router.route('/:ba_id/:mo_id/:ra_id/:se_id/:et_id').get((req, res) => {
    produit.getProduits(req.params.ba_id, req.params.mo_id, req.params.ra_id, req.params.se_id, req.params.et_id).then(json => {
        res.send(json)
    })
})

router.route('/:ba_id/:mo_id/:ra_id/:se_id/:et_id/:pr_id').get((req, res) => {
    produit.getProduit(req.params.ba_id, req.params.mo_id, req.params.ra_id, req.params.se_id, req.params.et_id).get(json => {
        res.send(json)
    })
})


module.exports = router;