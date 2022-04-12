const { Schema, model } = require('mongoose');

const catSchema = new Schema({
    name: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    breed: { type: String }
});

const Cat = model('Cat', catSchema);

module.exports = Cat;