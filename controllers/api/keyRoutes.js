const router = require('express').Router();
const { Key } = require('../../models');
const withAuth = require('../../util/auth')

router.post('/', withAuth, async (req,res) => {
    try {
        const newKey = await Project.create({
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
        const projectData = await Project.destroy({
            where: {
                id: req.params.key,
                key: req.session.key
            },
        });

        if(!projectData){
            res.status(404).json({ message: 'No project found' })
            return;
        }

        res.status(200).json(projectData);
    }   catch(err) {
        res.status(500).json(err);
    }
});




module.exports = router;