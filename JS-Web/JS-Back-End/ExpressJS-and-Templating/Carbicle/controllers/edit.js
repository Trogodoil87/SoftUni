module.exports = {
    async get(req, res) {
        const car = await req.storage.getById(req.params.id);

        if (car.owner != req.session.user.id) {
            return res.redirect('/login');
        }

        if (car) {
            res.render('edit', { title: 'Edit Page', car });

        } else {
            res.redirect('404');
        }
    },
    async post(req, res) {
        const car = {
            id: req.body._id,
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
        }

        try {
            if (await req.storage.updateById(req.params.id, car, req.session.user.id)) {
                res.redirect('/');
            } else {
                res.redirect('/login');
            }
        } catch (error) {

            res.redirect('404');
        }
    }
}