const router = require('express').Router();
const withAuth = require('../util/withAuth')

router.get('/', async (req, res) => {
  res.render('homepage');
});

module.exports = router;