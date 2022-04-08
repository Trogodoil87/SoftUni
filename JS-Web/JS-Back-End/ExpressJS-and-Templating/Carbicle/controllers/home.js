module.exports = {
    async get(req, res) {
        const query = req.query;
        const cars = await req.storage.getAll(query);
        res.render('index', { title: 'Home Page', cars });
    }
}
