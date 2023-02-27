const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home.js');
const dashRoutes = require('./dashboard.js');

router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);
router.use('/', homeRoutes);

module.exports = router;