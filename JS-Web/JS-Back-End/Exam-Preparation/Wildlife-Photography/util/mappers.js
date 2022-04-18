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

function postViewModel(post) {
    const model = {
        id: post._id,
        title: post.title,
        keyword: post.keyword,
        location: post.location,
        date: post.date,
        image: post.image,
        author: authorViewModel(post.author),
        description: post.description,
        rating: post.rating,
        votes: post.votes.map(voterViewModel)
    };

    return model;
}

function authorViewModel(user) {
    return {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName
    }
}

function voterViewModel(user) {
    return {
        id: user._id,
        email: user.email
    }
}

module.exports = {
    mapErrors,
    postViewModel
};