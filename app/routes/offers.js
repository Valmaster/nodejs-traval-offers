const express = require('express'),
    offersRoutes = express.Router(),
    OfferController = require('../controllers/offer');


module.exports = (app) => {

    offersRoutes.get('/offers', OfferController.getAll);
    offersRoutes.get('/offers/:id', OfferController.getById);
    // check if POST / GET
    offersRoutes.get('/offers/new', OfferController.new);
    offersRoutes.get('/offers/create', OfferController.new);

    offersRoutes.get('/offers/:id/edit', OfferController.edit);
    offersRoutes.get('/offers/:id/update', OfferController.edit);

    offersRoutes.get('/offers/:id/delete', OfferController.deleteById);



    app.use('/', offersRoutes);
};

