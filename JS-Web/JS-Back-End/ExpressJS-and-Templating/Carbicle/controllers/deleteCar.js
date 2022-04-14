module.exports = {
    async get(req, res) {
        const car = await req.storage.getById(req.params.id);

        if (car.owner != req.session.user.id) {
            return res.redirect('/login');
        }

        if (car) {
            res.render('delete', { title: 'Delete Page', car });
        } else {
            res.redirect('404');
        }
    },

    async post(req, res) {
        try {
            if (await req.storage.deleteById(req.params.id, req.session.user.id)) {
                res.redirect('/');
            } else {
                res.redirect('/login');
            }
        } catch (error) {
            res.redirect('404');
        }
    }
}