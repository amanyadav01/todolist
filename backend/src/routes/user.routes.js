const express = require('express');
const AuthController = require('../controller/auth.controller');

const router = express.Router();

router.post('/signup', AuthController.signUp);
router.post('/signIn', AuthController.signIn);

router.get('/:id', (req, res) => {
    console.log("Get  user by Id Api called");
    res.status(200).json({ status: 'Success', message: `Get user Details with id  : ${req.params.id}` })
})

module.exports = router;