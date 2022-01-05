const router = require('express').Router();
const { Keys } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newKey = await Keys.create({
            
        });

        res.status(200).json(newKey)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete()


module.exports = router;