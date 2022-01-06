const router = require('express').Router();
const withAuth = require('../util/auth')

router.get('/', async (req, res) => {
  res.render('homepage');
});

module.exports = router;