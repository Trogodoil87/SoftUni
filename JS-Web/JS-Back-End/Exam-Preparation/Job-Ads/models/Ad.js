const { Schema, model, Types: { ObjectId } } = require('mongoose');

const adSchema = new Schema({
    headline: { type: String, minlength: [4, 'Headline must be at least 4 characters long'] },
    location: { type: String, minlength: [8, 'Location must be at least 8 characters long'] },
    name: { type: String, minlength: [3, 'Company name must be at least 3 characters long'] },
    description: { type: String, maxlength: [40, 'Company description must be at most 40 characters long'] },
    author: { type: ObjectId, ref: 'User' },
    applied: { type: [ObjectId], default: [], ref: 'User' }
});

const Ad = model('Ad', adSchema);

module.exports = Ad;