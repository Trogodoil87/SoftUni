function mapErrors(error) {
    if (Array.isArray(error)) {
        return error
    } else if (error.name == 'ValidationError') {
        return Object.values(error.errors).map(e => ({ msg: e.message }));
    } else if (typeof error.message == 'string') {
        return [{
            msg: error.message
        }]
    } else {
        return [{ msg: 'Request error' }]
    }
}

function auctionViewModel(auction) {
    const model = {
        id: auction._id,
        title: auction.title,
        description: auction.description,
        category: auction.category,
        imageUrl: auction.imageUrl,
        price: auction.price,
        author: authorViewModel(auction.author),
        bidder: bidViewModel(auction.bidder)
    }

    return model
};

function browseViewModel(auction) {
    const model = {
        id: auction._id,
        title: auction.title,
        description: auction.description,
        category: auction.category,
        imageUrl: auction.imageUrl,
        price: auction.price,
        author: authorViewModel(auction.author)
    }

    return model
};

function authorViewModel(author) {
    const model = {
        id: author._id,
        email: author.email,
        firstName: author.firstName,
        lastName: author.lastName
    }

    return model;
}

function bidViewModel(author) {
    const model = {
        id: author._id,
        firstName: author.firstName,
        lastName: author.lastName,
        bidder: true
    }
    return model;
}

module.exports = {
    mapErrors,
    auctionViewModel,
    browseViewModel
};