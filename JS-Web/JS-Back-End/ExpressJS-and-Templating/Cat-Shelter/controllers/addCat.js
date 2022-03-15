module.exports = {

    async get(req, res) {
        const breeds = await req.storage.getAllBreeds();

        res.render('addCat', { title: 'addCat', breeds });
    },
    async post(req, res) {

        const cat = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.image,
            breed: req.body.breed
        }

        await req.storage.createCat(cat);
        res.redirect('/');
    }
}