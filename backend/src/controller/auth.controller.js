const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const createToken = (id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN })
    return token;
}

const checkPassword = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword);
}


const signUp = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
        };
        const newUser = await User.create(data);
        const token = createToken(newUser?._id);
        res.status(201).json({ status: 'success', message: 'New User created successfully', token, data: newUser });
    } catch (error) {
        console.log(error)
        res.status(200).json({ status: 'failure', message: 'Something wnet wrong', error });
    }
}


const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ status: 'failure', message: 'Please provide email and password.' })
        }
        const user = await User.findOne({ email }).select('+password');
        const passwordMatched = await checkPassword(password, user?.password);
        if (!user || !passwordMatched) {
            res.status(401).json({ status: 'failure', message: 'Invalid email or password' })
        }
        const token = createToken(user?._id);
        res.status(200).json({ status: 'success', token, data: { email: user?.email, name: user?.name } });
    } catch (error) {
        res.status(200).json({ status: 'failure', message: 'Something wnet wrong', error });
    }
}
module.exports = { signUp, signIn }