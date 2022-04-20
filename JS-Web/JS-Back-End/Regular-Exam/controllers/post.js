const router = require('express').Router();
const { isUser, isGuest } = require('../middleware/gurads.js');
const { createAuction, placeBid, getAuctionById, updateAuction } = require('../services/post.js');
const { auctionViewModel } = require('../util/mappers.js');



const { mapErrors } = require('../util/mappers.js');

router.get('/create', isUser(), async (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;

    const auction = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        author: userId
    };

    try {
        await createAuction(auction);
        res.redirect('/browse');
    } catch (err) {
        console.log(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Create Post', data: auction, errors })
    }
});

router.post('/bid/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    try {
        await placeBid(id, req.session.user._id, req.body.bid);
        const auction = auctionViewModel(await getAuctionById(id));
        auction.hasBidder = true;
        res.redirect('/details/' + id);
    } catch (err) {
        console.log(err);
        const errors = mapErrors(err);
        res.render('home', { title: 'Browse Page', errors })
    }
});


router.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    if (req.session.user._id != post.author.id) {
        return res.redirect('/login');
    }

    res.render('edit', { title: `Edit Post` });
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;

    const existing = auctionViewModel((await getAuctionById(id)));

    if (req.session.user._id != existing.author.id) {
        return res.redirect('/login');
    }

    const auction = {
        title: auction.title,
        category: auction.category,
        imageUrl: auction.imageUrl,
        price: auction.price,
        description: auction.description
    };

    try {
        await updateAuction(id, auction);
        res.redirect('/browse/' + id);
    } catch (err) {
        const errors = mapErrors(err)
        auction.id = id;
        res.render('edit', { title: 'Edit Post', auction, errors });
    }
});
module.exports = router;