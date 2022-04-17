const { mapError } = require("../services/utils.js");

module.exports = {
    async get(req, res) {
        res.render('create', { title: 'Create Page' });
    },
    async post(req, res) {
        const car = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
            owner: req.session.user.id
        };

        try {
            await req.storage.createCar(car);
            res.redirect('/');

        } catch (error) {
            console.log(`Error  >>> `, error);
            res.locals.errors = mapError(error);
            res.render('create', { title: 'Create Page' });
        }

    }

}
