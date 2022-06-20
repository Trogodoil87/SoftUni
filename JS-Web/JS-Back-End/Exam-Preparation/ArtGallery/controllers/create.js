const { route } = require('express/lib/application');
const { isUser, isGuest, notOwner } = require('../middleware/gurads.js');
const preload = require('../middleware/preload.js');
const { create, share } = require('../services/create.js')
const mapErrors = require('../util/mappers.js');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Publication' });
});

router.post('/create', isUser(), async (req, res) => {
    const model = {
        title: req.body.title.trim(),
        painting: req.body.painting.trim(),
        imageUrl: req.body.imageUrl.trim(),
        certificate: req.body.certificate.trim(),
        author: req.session.user._id
    }

    try {
        const publication = await create(model);
        res.redirect('/catalog')
    } catch (err) {
        const errors = mapErrors(err);
        res.render('create', { title: 'Create Publication', errors, data: model })
    }
});

router.get('/share/:id', preload(), notOwner(), async (req, res) => {
    const userId = req.session.user._id;

    try {
      
        await share(res.locals.data, userId);
        res.redirect('/');
    } catch (err) {
        const errors = mapErrors(err);
        res.render('home', { title: 'Art Gallery', errors });
    }
});

module.exports = router;
