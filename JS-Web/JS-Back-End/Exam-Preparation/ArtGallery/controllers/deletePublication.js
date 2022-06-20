const router = require('express').Router();
const preload = require('../middleware/preload.js');
const { isOwner } = require('../middleware/gurads.js');
const mapErrors = require('../util/mappers.js');
const { deleteArt, getAll } = require('../services/create.js');

router.get('/delete/:id', preload(), isOwner(), async (req, res) => {
    try {
        await deleteArt(req.params.id);
        res.redirect('/catalog');
    } catch (err) {
        const publications = (await getAll()).map(publicationViewModel);

        const errors = mapErrors(err);
        res.render('home', { title: 'Art Gallery', errors, publications });
    }
});

module.exports = router;