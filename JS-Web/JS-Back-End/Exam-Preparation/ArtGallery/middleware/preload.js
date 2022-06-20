const collectionService = require('../models/Publication.js')

function preload() {
    return async function (req, res, next) {
        const id = req.params.id;
        const data = await collectionService.findById(id);

        res.locals.data = data;

        next();
    };
}

module.exports = preload;