const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    dateBegin: {
        type: Date,
        required: true
    },
    dateEnd: {
        type: Date,
        required: true
    },
    imgUrl: {
        type: String,
        require: true
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

//

module.exports = mongoose.model('Offer', offerSchema, 'offers');
