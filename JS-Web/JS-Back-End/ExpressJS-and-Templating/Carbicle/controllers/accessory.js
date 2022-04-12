module.exports = {
    async createPage(req, res) {
        res.render('createAccessory', { title: 'Create accessory!' });
    },

    async create(req, res) {
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: req.body.price
        }

        try {
            await req.accessory.createAccessory(accessory);
            res.redirect('/');
        } catch (error) {
            res.redirect('404');
        }
    },

    async attachPage(req, res) {
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

    async attach(req, res) {
        
        try {
            const carId = req.params.id;
            const accessoryId = req.body.accessory;

            await req.storage.attachAccessory(carId, accessoryId);
            res.redirect('/');
            
        } catch (error) {
            console.log(`Error creating accessory!`);
            res.redirect('404');
        }
    }
}