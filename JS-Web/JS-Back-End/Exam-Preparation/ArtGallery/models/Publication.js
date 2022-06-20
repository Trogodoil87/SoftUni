const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^https?:\/\/(.+)/;
const CERTIFICATE_PATTRN = /Yes|No/;

const publicationSchema = new Schema({
    title: { type: String, minlength: [6, 'Title should be minimum 6 characters long'] },
    painting: { type: String, maxlength: [15, 'The Painting technique should be a maximum of 15 characters long.'] },
    imageUrl: { type: String, required: true, validate: {
        validator(value) {
            return URL_PATTERN.test(value);
        },
        message: 'Image must be a valid URL'
    } },
    certificate: { type: String, required: true, validate: {
        validator(value) {
            return CERTIFICATE_PATTRN.test(value)
        },
        message: 'The Certificate of authenticity there must be value "Yes" or "No"'
    } },
    author: { type: ObjectId, ref: 'User' },
    shares: { type: [ObjectId], default: [], ref: 'User' },
});

const Publication = model('Publication', publicationSchema);

module.exports = Publication;




