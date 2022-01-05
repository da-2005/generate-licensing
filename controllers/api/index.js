const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const keyRoutes = require('./keyRoutes');

router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/keys', keyRoutes);

module.exports = router;
