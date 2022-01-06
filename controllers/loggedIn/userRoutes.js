const router = require('express').Router();

router.get("/login", (req, res) => {
    res.render('login')
})

router.get('/projects', async (req, res) => {
    res.render('projects')
})

module.exports = router