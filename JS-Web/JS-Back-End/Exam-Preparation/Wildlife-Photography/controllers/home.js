const router = require('express').Router();
const { isUser } = require('../middleware/gurads.js');
const { getPosts, getPostById, getPostsByAuthor } = require('../services/post.js');

const { postViewModel } = require('../util/mappers.js');

const mapErrors = require('../util/mappers.js');


router.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

router.get('/catalog', async (req, res) => {
    try {
        const posts = (await getPosts()).map(postViewModel);
        res.render('catalog', { title: 'Catalog Page', posts });
    } catch (err) {
        const errors = mapErrors(err);
        res.render('catalog', { title: 'Catalog Page', errors });
    }
});

router.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;
    const post = postViewModel((await getPostById(id)));
    
    if (req.session.user) {
        post.hasUser = true;
        if (req.session.user._id == post.author.id) {
            post.isAuthor = true;
        } else {
            post.hasVoted = post.votes.find(v => v.id == req.session.user._id) != undefined;
        }
    }
    res.render('details', { title: post.title, post });
});

router.get('/profile', isUser(), async (req, res) => {
    const posts = (await getPostsByAuthor(req.session.user._id)).map(postViewModel);
    res.render('profile', { title: 'My Posts', posts });
});

module.exports = router;