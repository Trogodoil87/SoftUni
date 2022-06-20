const { isOwner } = require('../middleware/gurads.js');
const preload = require('../middleware/preload.js');
const { getById, detailsViewModel, update, getAll, publicationViewModel } = require('../services/create.js');
const mapErrors = require('../util/mappers.js');

const router = require('express').Router();

router.get('/edit/:id', preload(), isOwner(), async (req, res) => {
    try {
        res.render('edit', { data: detailsViewModel(res.locals.data) });
    } catch (err) {
        const errors = mapErrors(err);
        res.render('home', { title: 'Art Gallery', errors });
    }
});

router.post('/edit/:id', preload(), isOwner(), async (req, res) => {

    try {
        await update(req.body, res.locals.data);
        res.redirect('/details/' + req.params.id);
    } catch (err) {
        const publications = (await getAll()).map(publicationViewModel);
        const errors = mapErrors(err);
        res.render('home', {title: 'Art Gallery', errors, publications });
    }
});
module.exports = router;
