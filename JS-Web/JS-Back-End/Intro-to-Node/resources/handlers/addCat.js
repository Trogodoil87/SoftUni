const { IncomingForm } = require('formidable');
const fs = require('fs');



function addCatControler(req, res) {
    fs.createReadStream('../views/addCat.html').pipe(res);
}

// function createCatController(req, res) {
//     const form = new IncomingForm();
//     form.parse(req, (err, fields) => {

//         const item = {
//             name: fields.name,
//             description: fields.description,
//             breed: fields.breed
//         }

//         cats.push(item);

//         res.writeHead(301, {
//             'Location': '/'
//         });
//         res.end();
//     })
// }

module.exports = {
    addCatControler
}