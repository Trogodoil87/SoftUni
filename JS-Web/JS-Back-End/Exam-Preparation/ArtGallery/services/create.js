const Publication = require('../models/Publication.js');
const User = require('../models/User.js');


async function getAll() {
    return Publication.find({});
}

async function create(model) {
    const result = new Publication(model);

    const user = await User.findById(model.author);

    user.publication.push(result._id);


    await user.save();
    await result.save();
}

function publicationViewModel(publication) {

    const model = {
        title: publication.title,
        painting: publication.painting,
        imageUrl: publication.imageUrl,
        certificate: publication.certificate,
        authorId: publication.author,
        id: publication._id,
        shares: publication.shares
    }

    return model;
}

function detailsViewModel(publication) {
    const model = {
        title: publication.title,
        painting: publication.painting,
        imageUrl: publication.imageUrl,
        certificate: publication.certificate,
        author: publication.author.username,
        authorId: publication.author._id,
        id: publication._id
    }

    return model;
}

async function getById(id) {
    return Publication.findById(id).populate('author', 'username');
}

async function share(publication, userId) {

    publication.shares.push(userId);
    await publication.save();
}

async function shareHistoryById(publication, userId) {
    const result = publication.shares.find((e) => e == userId);

    if (result) {
        return true;
    } else {
        return false;
    }

}

async function update(model, existing) {
    existing.title = model.title.trim();
    existing.painting = model.painting.trim();
    existing.imageUrl = model.imageUrl.trim();
    existing.certificate = model.certificate.trim();
    existing.title = model.title.trim();

    await existing.save();
}

async function deleteArt(id) {
    await Publication.findByIdAndDelete(id);
}

async function profileInfoById(id) {
    const listOfPosts = await Publication.find({ author: id }).lean();
    const listOfShares = await Publication.find({ shares: id }).lean();

    const posts = listOfPosts.map((e) => e.title).join(', ');
    const shares = listOfShares.map((e) => e.title).join(', ');

    return {
        posts,
        shares
    }
}

module.exports = {
    create,
    getAll,
    publicationViewModel,
    getById,
    detailsViewModel,
    share,
    shareHistoryById,
    update,
    deleteArt,
    profileInfoById
}