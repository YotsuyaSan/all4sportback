let express = require('express');
    router = express.Router();
    section = require('../controllers/section.controller.js');

router.route('/:ra_id').get((req, res) => {
    section.getRangeeSections(req.params.ra_id).then((result) => {
        res.send(result)
    })
})

module.exports = router