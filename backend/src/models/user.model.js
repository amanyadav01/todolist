const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true

    },
    password: {
        type: String,
        required: [true, 'Please provide  a password'],
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your Password'],
        validate: {
            validator: function (val) {
                return val === this.password;
            },
            message: 'Passwords are not the same'
        }
    },
    registeredAt: {
        type: Date,
        default: Date.now()
    }

})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next()
})

const User = mongoose.model('User', userSchema);
module.exports = User;
//name
//email
// mobile,
// userName,
//password
//confirmPassword
// registeredAt,
// passwordHash