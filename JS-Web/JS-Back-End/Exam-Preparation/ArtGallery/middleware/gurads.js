function isUser() {
    return function (req, res, next) {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/login');
        }
    }
}

function isGuest() {
    return function (req, res, next) {
        if (req.session.user) {
            res.redirect('/');
        } else {
            next();
        }
    }
}

function isOwner() {
    return function (req, res, next) {
        if (req.session.user && req.session.user._id == res.locals.data.author) {
            next();
        } else {
            res.redirect('/');
        }
    }
}

function notOwner() {
    return function (req, res, next) {
        if (req.session.user && req.session.user._id != res.locals.data.author) {
            next();
        } else {
            res.redirect('/');
        }
    }
}

module.exports = {
    isUser,
    isGuest,
    isOwner,
    notOwner
}