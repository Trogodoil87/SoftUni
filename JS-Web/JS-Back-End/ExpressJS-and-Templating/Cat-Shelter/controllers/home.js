module.exports = {

    async home(req, res) {
        const cats = await req.storage.getAllCats(req.query);
        res.render('index', { cats, title: 'CatShelter' });
    }
}