const router = require('express').Router();
let Key = require('../models/Key')

router.post('/', async (req, res) => {
    let key = req.body.key
    try {
        let keyObject = await Key.findByPk(key)
        if(keyObject) return res.sendStatus(200)
        res.sendStatus(403)

    } catch(err) {
        res.sendStatus(500)
    } 
});

module.exports = router;