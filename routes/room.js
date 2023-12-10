const router = require('express').Router();
const req = require('../database/room')

//LogIn logUp sign
// router.post('/verifEmail',req.verifEmail)
router.post('/getRoom',req.getRoom)
router.post('/create',req.create)

// ---- //

module.exports = router;