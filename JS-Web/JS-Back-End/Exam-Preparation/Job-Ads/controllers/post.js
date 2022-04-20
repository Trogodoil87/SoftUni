const router = require('express').Router();

const { isUser } = require('../middleware/gurads.js');
const { mapErrors } = require('../util/mappers.js');
const { createAd, updateAd, deleteAd } = require('../services/post.js')
const { adViewModel, getAdById } = require('../services/post.js');


router.get('/create', isUser(), async (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', isUser(), async (req, res) => {

    const model = {
        headline: req.body.headline,
        location: req.body.location,
        name: req.body.name,
        description: req.body.description,
        author: req.session.user._id
    };

    try {
        const ad = await createAd(model);
        res.redirect('/catalog');
    } catch (err) {
        console.log(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Create Page', errors, data: model });
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    try {
        const ad = adViewModel((await getAdById(id)));
        if (req.session.user._id == ad.author.id) {
            res.render('edit', { title: 'Edit Page', data: ad })
        } else {
            res.redirect('/login')
        }

    } catch (err) {
        const errors = mapErrors(err);
        console.log(err);
        res.redirect('/')
    }
});

router.post('/edit/:id/:userId', isUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.params.userId;

    const ad = {
        headline: req.body.headline,
        location: req.body.location,
        name: req.body.name,
        description: req.body.description,
        author: {
            id: userId
        },
        id
    };

    try {
        if (req.session.user._id != userId) {
            throw new Error('Unauthorized');
        }

        await updateAd(id, ad);
        res.redirect('/details/' + id);
    } catch (err) {
        const errors = mapErrors(err);
        console.log(err);
        res.render('edit', { title: 'Edit Page', errors, data: ad });
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const ad = adViewModel(await getAdById(id));

    try {
        if (req.session.user._id != ad.author.id) {
            throw new Error('Unauthorized');
        }

        await deleteAd(id);
        res.redirect('/catalog')
    } catch (err) {
        const errors = mapErrors(err);
        console.log(err);
        res.redirect('/login')
    }
});

module.exports = router;