let express = require('express');

let router = express.Router();

let userController = require ('./controllers/userController');

router.get('/', (req, res) => res.redirect('/reservation'));

router.get('/reservation', userController.Reservation);
router.get('/encodage', userController.Encodage);
router.post('/encodage', userController.Encodage);
router.get('/validation', userController.Validation);
router.post('/validation', userController.Validation);
router.get('/confirmation', userController.Confirmation);
router.post('/confirmation', userController.Confirmation);

module.exports = router;


