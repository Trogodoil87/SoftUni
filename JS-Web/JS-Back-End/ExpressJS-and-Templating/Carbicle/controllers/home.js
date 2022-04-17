module.exports = {
    async get(req, res) {
        const cars = await req.storage.getAll(req.query);
        res.render('index', { title: 'Home Page', cars });
    }
}
