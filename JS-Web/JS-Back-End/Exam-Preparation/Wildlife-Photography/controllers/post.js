const router = require('express').Router();
const { isUser, isGuest } = require('../middleware/gurads.js');
const { createPost, updatePost, getPostById, deletePost, vote } = require('../services/post.js');

const { mapErrors, postViewModel } = require('../util/mappers.js');


router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Post' });
});

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;
    const post = {
        title: req.body.title,
        keyword: req.body.keyword,
        location: req.body.location,
        date: req.body.date,
        image: req.body.image,
        author: userId,
        description: req.body.description,
    };

    try {
        await createPost(post)
        res.redirect('/catalog')

    } catch (err) {
        const errors = mapErrors(err);

        res.render('create', { title: 'Create Post', data: post, errors })
    }

});

router.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const post = postViewModel((await getPostById(id)));

    if (req.session.user._id != post.author.id) {
        return res.redirect('/login');
    }

    res.render('edit', { title: `Edit Post`, post });
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;

    const existing = postViewModel((await getPostById(id)));

    if (req.session.user._id != existing.author.id) {
        return res.redirect('/login');
    }

    const post = {
        title: req.body.title,
        keyword: req.body.keyword,
        location: req.body.location,
        date: req.body.date,
        image: req.body.image,
        description: req.body.description,
    };

    try {
        await updatePost(id, post);
        res.redirect('/catalog/' + id);
    } catch (err) {
        const errors = mapErrors(err)
        post.id = id;
        res.render('edit', { title: 'Edit Post', post, errors });
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    const existing = postViewModel((await getPostById(id)));

    console.log(existing);

    if (req.session.user._id != existing.author.id) {
        return res.redirect('/login');
    }

    try {
        await deletePost(id);
        res.redirect('/catalog')
    } catch (err) {
        const errors = mapErrors(err);
        res.redirect('details', { titel: existing.title, errors });
    }
})

router.get('/vote/:id/:type', isUser(), async (req, res) => {
    const id = req.params.id;
    const value = req.params.type == 'upvote' ? 1 : -1;

    try {
        await vote(id, req.session.user._id, value);
        res.redirect('/catalog/' + id);
    } catch (err) {
        const errors = mapErrors(err);
        res.render('details', { titel: 'Details', errors });
    }
})

module.exports = router;
