module.exports = {
    async get(req, res) {
        res.render('404', {title: 'Page Not Found'});
    }
}
