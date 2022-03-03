let express = require('express');
const { getSectionEtageres } = require('../controllers/etagere.controller.js');
    router = express.Router();

router.route('/:et_id').get((req, res) => {
    getSectionEtageres(req.params.et_id).then((result) => {
        res.send(result)
    })
})

module.exports = router