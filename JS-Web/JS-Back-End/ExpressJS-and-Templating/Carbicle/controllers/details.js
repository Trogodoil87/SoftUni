module.exports = {
    async get(req, res) {
        const id = req.params.id;
        const car = await req.storage.getById(id);

        if (car) {
            res.render('details', { title: 'Detail\'s Page', car });
        } else {
            res.redirect('/');
        }
    }
}
