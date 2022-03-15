module.exports = {

    async get(req, res) {

        res.render('addBreed', { title: 'addBreed' });
    },
    async post(req, res) {
        res.render('addBreed', { title: 'addBreed' });

        const breed = {
            name: req.body.breed
        }

        req.storage.createBreed(breed);

        res.redirect('/');
    }
}