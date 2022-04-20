const Ad = require('../models/Ad.js');
const User = require('../models/User.js');

async function createAd(ad) {
    const result = new Ad(ad);

    await result.save();
    const user = await getUserById(result.author);

    user.ads.push(result._id);
    await user.save();

    return result;
}

async function getUserById(id) {
    return User.findById(id);
}

async function getAllAds() {
    return Ad.find({});

}

function adViewModel(ad) {
    const model = {
        id: ad._id,
        headline: ad.headline,
        location: ad.location,
        name: ad.name,
        description: ad.description,
        author: authorViewModel(ad.author),
        applied: ad.applied.map(appliesViewModel)
    }

    return model;
}

function appliesViewModel(apply) {
    const model = {
        id: apply._id,
        email: apply.email,
        description: apply.description
    }

    return model;
}

function authorViewModel(author) {
    const model = {
        id: author._id,
        email: author.email
    }

    return model;
}

async function getAdById(id) {
    return Ad.findById(id).populate('author', 'email').populate('applied', 'email description');
}

async function updateAd(id, ad) {
    const existing = await Ad.findById(id);


    existing.headline = ad.headline
    existing.location = ad.location
    existing.name = ad.name
    existing.description = ad.description
    existing.headline = ad.headline

    await existing.save();
}

async function deleteAd(id) {
    await Ad.findByIdAndDelete(id);
}

function isExisting(userId, ad) {
    const result = ad.applied.map(v => v.id == userId).includes(true);
    return result;
}


async function userAdApplication(id, userId) {
    const existing = await getAdById(id);

    if (isExisting(userId, existing)) {
        return false;
    }

    existing.applied.push(userId);
    await existing.save();

    return existing;
}

//TODO finish the logic for search
async function searchAd(search) {
    // const ads = (await Ad.find({})).map(v => v.populate('applied', 'email description'));
    // const ads = (await Promise.all(await Ad.find({}))).map(v => v.populate('applied', 'email description'));
    const ads = await Ad.find({}).where('applied', );
    console.log(ads);
}

module.exports = {
    createAd,
    getAllAds,
    adViewModel,
    getAdById,
    updateAd,
    deleteAd,
    userAdApplication,
    searchAd,
    isExisting
}