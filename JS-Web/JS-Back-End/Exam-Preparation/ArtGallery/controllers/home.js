const { isUser, isGuest } = require('../middleware/gurads.js');
const { getAll, publicationViewModel, getById, detailsViewModel, shareHistoryById } = require('../services/create.js');
const preload = require('../middleware/preload.js');

const mapErrors = require('../util/mappers.js');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const publications = (await getAll()).map(publicationViewModel);
        res.render('home', { publications });
    } catch (err) {
        const errors = mapErrors(err);
        res.render('home', { title: 'Art Gallery', errors })
    }
});

router.get('/catalog', async (req, res) => {
    try {
        const catalog = (await getAll()).map(publicationViewModel);
        res.render('catalog', { title: 'Catalog', publications: catalog });

    } catch (err) {
        const errors = mapErrors(err);
        res.render('home', { title: 'Art Gallery', errors });
    }
});

router.get('/details/:id', preload(), async (req, res) => {
    const id = req.params.id;

    try {

        const publication = detailsViewModel(await getById(id));
        if (req.session.user && req.session.user._id == publication.authorId) {
            publication.isOwner = true;
        }
        if (req.session.user && await shareHistoryById(res.locals.data, req.session.user._id)) {
            publication.isShared = true;
        }

        res.render('details', { publication });
    } catch (err) {
        const errors = mapErrors(err);
        res.render('home', { title: 'Art Gallery', errors });
    }
});

module.exports = router;
