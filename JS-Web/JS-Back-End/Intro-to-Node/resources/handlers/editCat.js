const fs = require('fs');

function editCatController(req, res) {
    fs.createReadStream('../views/editCat.html').pipe(res);
}

module.exports = {
    editCatController
}

