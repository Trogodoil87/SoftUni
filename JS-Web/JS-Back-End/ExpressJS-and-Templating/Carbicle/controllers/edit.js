module.exports = {
    async get(req, res) {
        const car = await req.storage.getById(req.params.id);
        res.render('edit', { title: 'Edit Page', car });
    },
    async post(req, res) {
        const car = {
            id: req.body._id,
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
        }
        await req.storage.updateById(req.params.id, car);
        res.redirect('/');
    }
}