const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const keyRoutes = require('./keyRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/keys', keyRoutes);

module.exports = router;
