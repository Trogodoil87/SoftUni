const User = require('../models/User.js');

const { hash, compare } = require('bcrypt');

//TODO add all fields required by the exam
async function register(email, password, gender) {
    const existing = await getUserByEmail(email);

    if (existing) {
        throw new Error('Email is taken');
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        email,
        hashedPassword,
        gender
    });
    await user.save();

    return user;
}

//TODO change identifier
async function login(email, password) {
    const user = await getUserByEmail(email);

    if (!user) {
        throw new Error('Email or password don\'t match')
    }

    const hasMatch = await compare(password, user.hashedPassword);

    if (!hasMatch) {
        throw new Error('Incorrect password');
    }

    return user;
}

//TODO identify user by given indetifier
async function getUserByEmail(email) {
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    return user;
}

module.exports = {
    login,
    register
}