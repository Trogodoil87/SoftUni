module.exports = {
    async get(req, res) {
        const id = req.params.id;
        const car = await req.storage.getById(id);

        if (req.session.user && req.session.user.id == car.owner) {
            car.isOwner = true;
        }
        console.log(res.locals);

        if (car) {
            res.render('details', { title: 'Detail\'s Page', car });
        } else {
            res.redirect('/');
        }
    }
}
