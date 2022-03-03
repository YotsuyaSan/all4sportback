let express = require('express');
    router = express.Router();
    rangee = require('../controllers/rangee.controller.js');

router.route('/:mo_id').get((req, res) => {
    rangee.getModuleRangees(req.params.mo_id).then((result) => {
        res.send(result)
    })
})

module.exports = router;