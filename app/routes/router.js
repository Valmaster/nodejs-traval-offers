module.exports = (app) => {
    require('./offers')(app);

    // Define default route
    app.get('/errors', (req, res) => {
        return res.render('errors');
    })

    app.use((req, res) => {
        return res.redirect('/offers');
    });
}
