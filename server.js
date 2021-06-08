require('dotenv').config(); // Parse the .env and set all the infos in the process.env
const express = require('express'),
    mongoose = require('mongoose'),
    User = require('./app/models/user'),
    path = require('path');

// Create the app
const app = express();

// Parse all the body from the POST form
app.use(express.urlencoded({extended: true}));

// Define the view engine
app.set('views', path.join(__dirname, 'app', 'views')); // Override
app.set('view engine', 'ejs');

// On configure le client de connexion
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

/* EQUIVALENT
const offersRoute = require('app/routes/offers');
offersRoute(app);*/

// TO THIS
require('./app/routes/router')(app);

User
    .countDocuments()
    .exec((err, usersCount) => {
       if (err) {
           return console.error(err);
       }
       if (usersCount === 0) {
           new User({
               username: 'ThomasC',
               email: 'contact@thomaschevalier.fr',
               firstname: 'Thomas',
               lastname: 'CHEVALIER'
           }).save();
       }
    });

app.listen(process.env.SERVER_PORT, () => {
    console.info(`Server is runnning on port ${process.env.SERVER_PORT}`);
})
