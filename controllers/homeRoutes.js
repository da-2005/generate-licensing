const router = require('express').Router();
const withAuth = require('../util/auth')

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/userprojects', async (req, res) => {
  res.render('userProjects')
})

module.exports = router;