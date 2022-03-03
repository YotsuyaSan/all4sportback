let express = require('express');
const { getModules } = require('../controllers/module.controller.js');
    router = express.Router();
router.route('/:ba_id').get((req, res) => {
    getModules(req.params.ba_id).then((result) => {
        res.send(result)
    })
})

module.exports = router;