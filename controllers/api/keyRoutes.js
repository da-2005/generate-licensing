const router = require('express').Router();
const { Key } = require('../../models');
const withAuth = require('../../util/auth')

router.post('/', withAuth, async (req, res) => {
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