const http = require('http');
const port = 3000;


const { addBreedController, createBreedController } = require('./addBreeed.js');
const { homeControler } = require('./home.js');
const { addCatControler } = require('./addCat.js');
const { editCatController } = require('./editCat.js');
const { catShelterController } = require('./catShelter.js');

const router = require('./router');



http.createServer(router.main).listen(port);

router.get('/', homeControler);
router.get('/addBreed', addBreedController);
router.get('/addCat', addCatControler);
router.get('/editCat', editCatController);
router.get('/catShelter', catShelterController);
router.post('/createBreed', createBreedController);

