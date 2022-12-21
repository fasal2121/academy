let express = require('express');

let router = express.Router();

let userController = require ('./controllers/userController');

router.get('/', (req, res) => res.redirect('/user'));

router.get('/user', userController.listerFormations);
router.post('/user', userController.listerFormations);
router.post('/session', userController.session);
router.post('/Seconnecter', userController.seConnecter);
router.post('/inscription', userController.inscription);

// router.get('/test', userController.test);
// router.get('/login/:user', userController.login);
// router.get('/login', userController.login);
// router.get('/user', userController.userList);
router.get('/user/show/:iduser', userController.userShow);
router.get('/user/remove/:iduser', userController.userRemove);
router.get('/monPanier', userController.showPanier);
router.post('/monPanier', userController.showPanier);
router.post('/user/new', userController.userNew);
router.get('/user/update/:iduser', userController.userUpdate);


module.exports = router;


