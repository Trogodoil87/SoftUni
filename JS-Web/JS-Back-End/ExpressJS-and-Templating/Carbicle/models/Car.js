const { Schema, model, Types: { ObjectId } } = require('mongoose');

const carSchema = new Schema({
    name: { type: String, required: [true, 'Car listing name must be at least 3 characters long'], minlength: 3 },
    description: { type: String, default: '' },
    imageUrl: { type: String, default: 'noImage.jpg' },
    price: { type: Number, min: 0, required: [true, 'Please choose a price!'] },
    accessories: { type: [ObjectId], default: [], ref: 'Accessory' },
    isDeleted: { type: Boolean, default: false },
    owner: { type: ObjectId, ref: 'User' }
});

const Car = model('Car', carSchema);

module.exports = Car;