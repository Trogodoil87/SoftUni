module.exports = {
    get(req, res) {
        res.render('createAccessory', { title: 'Create accessory!' });
    },

    async post(req, res) {
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
            owner: req.session.user.id
        }

        try {
            await req.accessory.createAccessory(accessory);
            res.redirect('/');
        } catch (error) {
            res.redirect('404');
        }
    }
}