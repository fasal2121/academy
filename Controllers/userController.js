let Formation = require('../models/userModel');





exports.Reservation = function (req, res) {
    res.render('home.ejs');

};
exports.Encodage = function (req, res) {
    res.render('person.ejs');

};

exports.Validation = function (req, res) {
    res.render('validation.ejs');

};
exports.Confirmation = function (req, res) {
    res.render('confirmation.ejs');

};


