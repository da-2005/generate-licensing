const router = require('express').Router();
const { Key } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newKey = await Key.create(req.body);

        // req.session.save(() => {
        //     req.session.key = newKey.project_id
        // })

        res.status(200).json(newKey)
    } catch (err) {
        res.status(400).json(err);
    }
});




module.exports = router;