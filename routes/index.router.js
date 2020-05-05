const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const stuuser = require('../controllers/reguser.controller');
//var viewques = require('../controllers/userquesContoller');

// require("dotenv").config()
//insert data to database
// router.post('/register1', async (req, res) => {
//     const user = new User(req.body)
//     const email = req.body.email;
//     generateOtp(email);
//     try {
       
       
//         await user.save()
//         res.send(user)
//         res.status(200).send()
        
//     } catch {
//         res.status(400).send()
//     }
// })


const jwtHelper = require('../config/jwtHelper');
router.post('/register1',stuuser.register1);
router.post('/auth1',stuuser.authenticate1);
router.get('/reguserProfile',jwtHelper.verifyJwtToken,stuuser.reguserProfile1);
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
module.exports = router;



