const { Schema, model, Types: { ObjectId } } = require('mongoose');

//TODO change use model to exam description
//TODO add validation
const userSchema = new Schema({
    username: { type: String, minlength: [4, 'Username must be at least 4 characters long'] },
    hashedPassword: { type: String, minlength: [3, 'Password must be at least 3 characters long'] },
    address: { type: String, required: [true, 'Address is required'], maxlength: [20, 'Address must be at most 20 characters long'] },
    publication: { type: [ObjectId], default: [], ref: 'Publication' }
});

userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;