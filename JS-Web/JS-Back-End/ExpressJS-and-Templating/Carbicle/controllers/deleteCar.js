module.exports = {
    async deleteCar(req, res) {
        await req.storage.deleteById(req.params.id);
        res.redirect('/');
    }
}