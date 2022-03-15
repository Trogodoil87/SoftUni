const { IncomingForm } = require('formidable');
const { IncomingMessage, ServerResponse } = require("http");
const fs = require('fs');


function addBreedController(req, res) {
    fs.createReadStream('../views/addBreed.html').pipe(res);
}
/**
 * 
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */
function createBreedController(req, res) {
    let body = '';

    req.on('data', data => {
        body += data;
    });
    req.on('end', () => {
        let [field, newBreed] = body.split('=');
        fs.readFile('../data/breeds.json', (err, data) => {
            const reciewdData = JSON.parse(data.toString());
            reciewdData.breeds.push(newBreed);

            fs.writeFileSync('../data/breeds.json', JSON.stringify(reciewdData, null, 2));
            
        });

        // res.writeHead(301, {
        //     Location: '/'
        // });
        res.end();
    })
}

module.exports = {
    addBreedController,
    createBreedController
}

