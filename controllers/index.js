const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')
const loggedInRoutes = require('./loggedIn')
const licenseRoutes = require('./licenseRoutes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes)
router.use('/users', loggedInRoutes)
router.use('/license', licenseRoutes)

module.exports = router;