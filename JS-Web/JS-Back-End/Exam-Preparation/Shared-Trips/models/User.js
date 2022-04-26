const { Schema, model, Types: { ObjectId } } = require('mongoose');

//TODO change use model to exam description
//TODO add validation
const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;

const userSchema = new Schema({
    email: {
        type: String, validate: {
            validator(value) {
                return EMAIL_PATTERN.test(value)
            },
            message: 'Invalid email: it should be in the following format - some@email.com'
        }
    },
    hashedPassword: { type: String, minlength: [4, 'Password should be at least 4 characters long'] },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    history: { type: [ObjectId], default: [], ref: 'Trip' },
    historyCount: { type: Number, default: 0 }
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;