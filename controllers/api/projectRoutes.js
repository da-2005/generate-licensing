const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../util/auth')

router.post('/', withAuth, async (req,res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try{
        const projectData = await Project.destroy({
            where: {
               project_id: req.params.project_id,
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


router.get('/:id', withAuth, async (req, res) => {
    try{
        const project = await Project.findByPk(req.params.id)

        res.status(200).json(project);
    } catch(err) {
        res.status(500).json(err);
    }
})
module.exports = router;