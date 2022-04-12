module.exports = {
    async get(req, res) {
        res.render('about', {title: 'About Page'});
    }
}
