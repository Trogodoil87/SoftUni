const router = require('express').Router();
const { userAdApplication, searchAd, isExisting } = require('../services/post.js');


const { isUser } = require('../middleware/gurads.js');
const { getAllAds, adViewModel, getAdById } = require('../services/post.js');
const { mapErrors } = require('../util/mappers.js');

router.get('/', async (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/catalog', async (req, res) => {

    try {
        const ads = (await getAllAds()).map(adViewModel);
        res.render('catalog', { title: 'Catalog Page', ads });
    } catch (err) {
        const errors = mapErrors(err);
        console.log(err);
        res.redirect('/')
    }
});

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const ad = adViewModel((await getAdById(id)));

        if (req.session.user && req.session.user._id == ad.author.id) {
            ad.isOwner = true;
        } else if (req.session.user) {
            ad.hasUser = true;

            if (isExisting(req.session.user._id, ad)) {
                ad.hasApplied = true;
            }
        }
        res.render('details', { title: 'Details Page', ad });
    } catch (err) {
        const errors = mapErrors(err);
        console.log(err);
        res.redirect('/')
    }
});

router.get('/details/apply/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const ad = await getAdById(id);

    try {
        if (req.session.user._id == ad.author.id) {
            throw new Error('Unauthorized');
        }


        const result = await userAdApplication(id, req.session.user._id);

        res.redirect('/details/' + id);
    } catch (err) {
        const errors = mapErrors(err);
        console.log(err);
        res.render('home', { title: 'Home Page', errors });
    }
});

router.get('/search', isUser(), async (req, res) => {
    res.render('search', { title: 'Search Page' });
});

router.post('/search', isUser(), async (req, res) => {
    const search = req.body.search;

    await searchAd(search);
    res.redirect('/search')
});

module.exports = router;
