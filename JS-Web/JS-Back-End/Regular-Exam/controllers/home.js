const router = require('express').Router();
const { isUser } = require('../middleware/gurads.js');
const { getAuctions, getAuctionById, isBiddedAuction } = require('../services/post.js');
const { auctionViewModel, browseViewModel } = require('../util/mappers.js');

const { mapErrors } = require('../util/mappers.js');


router.get('/', async (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/browse', async (req, res) => {
    try {
        const auctions = (await getAuctions()).map(browseViewModel);

        res.render('browse', { title: 'Browse Page', auctions });
    } catch (err) {
        console.log(err);
        res.render('browse', { title: 'Browse Page', errors });
    }
});

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        let auction;

        if (await isBiddedAuction(id)) {
            auction = auctionViewModel(await getAuctionById(id));
        } else {
            auction = browseViewModel(await getAuctionById(id));
            auction.hasNoBid = true;
        }

        if (req.session.user) {
            if (req.session.user._id == auction.author.id) {
                console.log(auction.bidder);
                return res.render('detailsOwner', { title: 'Details Owner', auction });
            } else {

                auction.hasUser = true;
                auction.notAuthor = true;
            }
        }

        res.render('detailsNotOwner', { title: 'Details User', auction });

    } catch (err) {
        const errors = mapErrors(err);
        console.log(err);
        res.render('browse', { title: 'Browse Page', errors });
    }
});

module.exports = router;