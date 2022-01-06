const router = require('express').Router();
const withAuth = require('../../util/auth')
const Project = require('../../models/Project')

router.get("/login", (req, res) => {
    res.render('login')
})

router.get('/projects', withAuth, async (req, res) => {
    try {
        let usersProjects = await Project.findAll({ where: { user_id: req.session.user_id } })

        res.render('projects', { usersProjects })
    } catch(err) {
        res.sendStatus(500)
        console.log(err)
    }   
})

module.exports = router