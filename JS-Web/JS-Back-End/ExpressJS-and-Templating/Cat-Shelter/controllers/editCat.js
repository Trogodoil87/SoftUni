module.exports = {

    async get(req, res) {
        const id = req.params.id;
        const cat = await req.storage.getCatById(id);
        const breeds = await req.storage.getAllBreeds();

        console.log(breeds);
        if (cat) {
            res.render('editCat', { cat, breeds, title: 'editCat'});
        } else {
            res.redirect('/404');
        }
    },
    async post(req, res) {
        const id = req.params.id;
        const cat = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            breed: req.body.breed,
        };

        try {
            await req.storage.editCatById(id, cat);
            console.log(req.body);
            res.redirect('/');
        } catch (err) {
            res.redirect('/404');
        }
    }
}