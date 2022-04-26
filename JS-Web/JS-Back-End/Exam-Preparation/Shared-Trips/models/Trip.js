const { Schema, model, Types: { ObjectId } } = require('mongoose');

const IMAGE_PATTERN = /^(https?:\/\/(.)+)$/;

const tripSchema = new Schema({
    startPoint: { type: String, minlength: [4, 'Start point should be at least 4 characters long'] },
    endPoint: { type: String, minlength: [4, 'End point be at least 4 characters long'] },
    date: { type: String, required: true },
    time: { type: String, required: true },
    image: {
        type: String, validate: {
            validator(value) {
                return IMAGE_PATTERN.test(value)
            },
            message: 'Invalid image URL'
        }
    },
    brand: { type: String, minlength: [4, 'Car brand should be at least 4 characters long'] },
    seats: { type: Number, min: [0, 'Seats must be from 0 to 4'], max: [4, 'Seats must be from 0 to 4'] },
    price: { type: Number, min: [1, 'Price must be from 1 to 50'], max: [50, 'Price must be from 1 to 50'] },
    description: { type: String, minlength: [10, 'Description should be at least 10 characters long'] },
    author: { type: ObjectId, ref: 'User' },
    buddies: { type: [ObjectId], default: [], ref: 'User' }
});

const Post = model('Trip', tripSchema);

module.exports = Post;