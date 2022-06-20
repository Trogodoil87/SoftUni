const { route } = require('express/lib/application');
const router = require('express').Router();

router.get('*', (req, res) => {
    res.render('404');
})

module.exports = router;
