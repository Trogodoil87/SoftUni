module.exports = {

    async get(req, res) {
        const id = req.params.id;
        const cat = await req.storage.getCatById(id);

        if (cat) {
            res.render('catShelter', {title: 'CatShelter', cat});
        } else {
            res.redirect('/404');
        }
    },
    async post(req, res) {
        const id = req.params.id;
        
        try {
            await req.storage.deleteCatById(id);
            res.redirect('/');
        } catch (err) {
            
        }
    }
}