const fs = require('fs/promises');

const filePath = './services/';

async function read(fileName) {

    try {
        const file = await fs.readFile(`${filePath}${fileName}.json`);
        return JSON.parse(file);
    } catch (err) {
        console.error('Database read error');
        console.error(err);
        // process.exit(1);

    }

}

async function write(data, fileName) {
    try {
        await fs.writeFile(`${filePath}${fileName}.json`, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Database write error');
        console.error(err);
    }
}

async function getCatById(id) {
    const data = await read('cats');

    const cat = data[id];
    if (cat) {
        return Object.assign({}, { id }, cat);
    } else {
        return undefined;
    }
}

async function deleteCatById(id) {
    const data = await read('cats');

    if (data.hasOwnProperty(id)) {
        delete data[id];
        await write(data, 'cats');
    } else {
        throw new Error('No such id in database');
    }
}

async function editCatById(id, cat) {
    const data = await read('cats');

    if (data.hasOwnProperty(id)) {
        data[id] = cat;
        await write(data, 'cats');  
    } else {
        throw new Error('No such id in database');
    }
}

async function getAllCats(query) {
    const data = await read('cats');
    let cats = Object
        .entries(data)
        .map(([id, v]) => Object.assign({}, { id }, v));

    if (query.search) {
        cats = cats.filter(c => c.breed.toLocaleLowerCase().includes(query.search.toLocaleLowerCase()))
    }

    return cats;

}

async function createCat(cat) {
    const id = nextId();

    const cats = await read('cats');
    cats[id] = cat;

    await write(cats, 'cats');
}

async function getAllBreeds() {
    const data = await read('breeds');
    return Object
        .entries(data)
        .map(([id, v]) => Object.assign({}, { id }, v));
}

async function getBreedById(id) {
    const data = await read('breeds');
    const breed = data[id];

    if (breed) {
        return Object.assign({}, { id }, breed);
    } else {
        return undefined;
    }
}

async function createBreed(breed) {
    const id = nextId();

    const breeds = await read('breeds');
    breeds[id] = breed;

    await write(breeds, 'breeds');
}

function nextId() {
    return 'xxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
}

module.exports = () => (req, res, next) => {
    req.storage = {
        getAllCats,
        getCatById,
        createCat,
        getAllBreeds,
        getBreedById,
        createBreed,
        deleteCatById,
        editCatById
    };
    next();
}