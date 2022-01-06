const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')
const loggedInRoutes = require('./loggedIn')

router.use('/api', apiRoutes);
router.use('/', homeRoutes)
router.use('/users', loggedInRoutes)

module.exports = router;