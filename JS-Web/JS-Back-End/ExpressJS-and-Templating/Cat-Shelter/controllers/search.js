module.exports = {
    async get(req, res) {
        console.log(req.query);
        res.redirect('/');
    } 
}