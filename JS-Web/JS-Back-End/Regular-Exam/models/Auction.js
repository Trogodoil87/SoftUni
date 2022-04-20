const { Schema, model, Types: { ObjectId } } = require('mongoose');

const auctionSchema = new Schema({
    title: {
        type: String, minlength: [4, 'Title must be at least 4 characters long.']
    },
    description: { type: String, maxlength: [200, 'Location must be at most 200 characters long'] },
    category: {
        type: String, required: [true, 'Category is required'], validate: {
            validator(value) {
                if (value == 'vehicles') {
                    return true;
                } else if (value == 'estate') {
                    return true;
                } else if (value == 'electronics') {
                    return true;
                } else if (value == 'furniture') {
                    return true;
                } else if (value == 'other') {
                    return true
                } else {
                    return false;
                }
            }
        },
        message: 'Category should be one of the following: Vehicles, Real Estate, Electronics, Furniture, Other'
    },
    imageUrl: { type: String, required: [true, 'image URL is rquired'] },
    price: {
        type: Number, min: [0, 'Price must be a positive value']
    },
    author: { type: ObjectId, required: [true, 'Author is required'], ref: 'User' },
    bidder: { type: ObjectId, ref: 'User' },
});

const Auction = model('Auction', auctionSchema);

module.exports = Auction;