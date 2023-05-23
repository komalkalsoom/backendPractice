const express = require("express")
const authController =require('../controllers/Controller')
const router = express.Router();

router.post('/register',authController)

module.exports = router;