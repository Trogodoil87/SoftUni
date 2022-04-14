module.exports = {

    async get(req, res) {
        try {
            const [car, accessories] = await Promise.all([
                req.storage.getById(req.params.id),
                req.accessory.getAll()
            ]);
            const existingIds = car.accessories.map(a => a.id.toString());
            const availableAccessories = accessories.filter(a => existingIds.includes(a.id.toString()) == false);

            res.render('attachAccessory', { title: 'Attach accessory!', accessories: availableAccessories, car });
        } catch (error) {
            res.redirect('404');
        }
    },

    async post(req, res) {

        try {
            const carId = req.params.id;
            const accessoryId = req.body.accessory;

            if (await req.storage.attachAccessory(carId, accessoryId, req.session.user.id)) {
                return res.redirect('/');
            } else {
                return res.redirect('/login');
            }

        } catch (error) {
            console.log(`Error creating accessory!`);
            console.log(error.message)
            res.redirect('/404');
        }
    }
}