const fs = require('fs');

function catShelterController(req, res) {
    fs.createReadStream('../views/catShelter.html').pipe(res);
}

module.exports = {
    catShelterController
}