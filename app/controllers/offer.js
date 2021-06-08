const Offer = require('../models/offer');

exports.getAll = (req, res, next) => {
    Offer
        .find()
        .limit(5)
        .populate('creatorId')
        .exec((err, offers) => {

            if (err) {
                console.error(err);
                return res.redirect('/errors');
            }

            return res.render('offers/index', {offers});
        });
};

exports.getById = (req, res, next) => {
    // Passe à la fonction d'après dans le routes/offers.js
    if (req.params.id === "new") return next();
};

exports.new = (req, res, next) => {
    if (req.method === 'POST') {
        const User = require('../models/user');
        User
            .find()
            .exec((err, users) => {
                if (err) {
                    console.error(err);
                    return res.redirect('/errors');
                }
                req.body.creatorId = users[0]._id;
                new Offer(req.body).save((err, offer) => {
                    if (err) {
                        console.error(err);
                        return res.redirect('/errors');
                    }
                    return res.redirect('/offers')
                })
            })
    } else {
        return res.render('offers/new');
    }
};

exports.edit = (req, res, next) => {

};

exports.deleteById = (req, res, next) => {

};
