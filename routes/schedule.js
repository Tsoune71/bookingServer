const router = require('express').Router();
const req = require('../database/schedule')

router.post('/getDay',req.getDay)
router.post('/availableScedule',req.availableScedule)


module.exports = router;