const Auction = require('../models/Auction.js');

async function createAuction(auction) {
    const result = new Auction(auction);
    await result.save();

    return result;
}

async function getAuctions() {
    return Auction.find({});
}

async function getAuctionById(id) {
    return Auction.findById(id).populate('author', 'email firstName lastName').populate('bidder', 'email firstName lastName');
}

async function placeBid(id, userId, bid) {
    const auction = await Auction.findById(id);

    if (auction.hasOwnProperty('bidder') && auction.bidder.includes(userId)) {
        throw new Error('Already bidded to this auction!')
    }

    if (auction.bid && auction.bid < bid) {
        auction.bid = bid
        auction.bidder = userId;
    } else {
        auction.bidder = userId;
        auction.bid = bid;
    }

    await auction.save();
}

async function isBiddedAuction(id) {
    const existing = await getAuctionById(id);
    // const existing = await Auction.findById(id);

    if (existing.bidder) {
        return true
    } else {
        return false;
    }

}


async function updateAuction(id, auction) {
    const existing = await Post.findById(id);

    existing.title = auction.title;
    existing.category = auction.category;
    existing.imageUrl = auction.imageUrl;
    existing.price = auction.price;
    existing.description = auction.description;

    await existing.save();

}
module.exports = {
    createAuction,
    getAuctions,
    getAuctionById,
    placeBid,
    updateAuction,
    isBiddedAuction
}