const User = require('../models/User.js');

const { hash, compare } = require('bcrypt');

async function register(email, password, firstName, lastName) {
    const existing = await getUserByUsername(email);

    if (existing) {
        throw new Error('User is taken');
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        email,
        hashedPassword,
        firstName,
        lastName
    });
    await user.save();

    return user;
}

async function login(email, password) {
    const user = await getUserByUsername(email);

    if (!user) {
        throw new Error('Username or password don\'t match')
    }

    const hasMatch = await compare(password, user.hashedPassword);

    if (!hasMatch) {
        throw new Error('Incorrect password');
    }

    return user;
}

async function getUserByUsername(email) {
    const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

    return user;
}

module.exports = {
    login,
    register
}