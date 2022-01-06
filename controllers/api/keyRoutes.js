const router = require('express').Router();
const req = require('express/lib/request');
const { Key } = require('../../models');
const withAuth = require('../../util/auth')

router.post('/', withAuth, async (req, res) => {

    try {
        const newKey = await Key.create({
            ...req.body,
            key: req.session.key,
        });

        res.status(200).json(newKey);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.delete('/:id', withAuth, async (req, res) => {
    try{
        const keyData = await Key.destroy({
            where: {
                id: req.params.key,
                key: req.session.key
            },
        });

        if(!keyData){
            res.status(404).json({ message: 'No key found' })
            return;
        }

        res.status(200).json(keyData);
    }   catch(err) {
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try{
        const key = await Key.findByPk(req.params.key)

        res.status(200).json(key);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;