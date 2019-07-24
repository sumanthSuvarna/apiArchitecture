var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/comments', require('./comment/commentRoutes'));
router.use('/members', require('./member/memberRoutes'));


module.exports = router;