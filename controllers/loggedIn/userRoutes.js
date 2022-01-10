const router = require('express').Router();
const withAuth = require('../../util/withAuth')
const Project = require('../../models/Project')

router.get("/login", (req, res) => {
    res.render('login')
})

router.get('/projects', withAuth, async (req, res) => {
    try {
        let usersProjects = await Project.findAll({ where: { user_id: req.session.user_id } })
        usersProjects = usersProjects.map(project => project.get( {plain:true} ))
        res.render('projects', { usersProjects, logged_in:req.session.logged_in })
    } catch(err) {
        res.sendStatus(500).json(err)
    }   
})

module.exports = router