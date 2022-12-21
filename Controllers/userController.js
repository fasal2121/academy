let Formation = require('../models/userModel');


// connection.connect(function(error){
//     if (error) console.log(error);
// });

exports.session = async function(req, res) {
    req.session.pseudo = req.body.pseudo;
    console.log(req.body.pseudo);
    //res.send('Hello ' + req.session.pseudo);
    res.redirect('/user');
};

exports.inscription = async function(req, res) {
    try {
        idformation = req.body.id;
        const allFormations = await Formation.Add(idformation);
    } catch (err){
        console.log(err);
        next(err);
    }
    res.redirect('/user');
};

// exports.login =  function(req, res){
//     req.session.user = req.params.user;
//     // req.session.user = req.query.lastname;
//     console.log(req.session);
//     res.send('Hello ' + req.session.user)
    
// };

// exports.test =  function(req, res){
//     console.log(req.session);
//     res.send('Hello ' + req.session.user)
// };

exports.seConnecter = function(req,res) {
    // let user = new User ("Dupont", "Paul");
    // userList.push(user);
    console.log("Se connecter");
    res.render('Connection.ejs');
    
    // console.log(req.session);
    // res.send('Hello ' + req.session.pseudo);

};


exports.listerFormations = async function(req, res) {
    try {
        const allFormations = await Formation.fetchAll();
        console.log(allFormations[0][0].id);
        res.render('userList.ejs', {formations: allFormations[0]});
    } catch (err){
        console.log(err);
        next(err);
    }
    // console.log(req.session);
    // res.send('Hello ' + req.session.pseudo)

};


exports.showPanier = async function(req, res) {
    try {
        const allFormations = await Formation.fetchAll();
        console.log(allFormations[0][0].id);
        res.render('userAdd.ejs', {formations: allFormations[0]});
    } catch (err){
        console.log(err);
        next(err);
    }
};


exports.userUpdate = function (req, res) {
    let iduser = req.params.iduser;
    res.render('userAdd.ejs', {iduser: iduser , lastname: userList[iduser]["lastname"], firstname: userList[iduser]["firstname"]});

};

exports.userNew = function(req, res) {
    let iduser = req.body.iduser;
    let lastname = req.body.lastname;
    let firstname = req.body.firstname;

    if (iduser >= 0) {
        userList[iduser]["lastname"] = lastname;
        userList[iduser]["firstname"] = firstname;
    }
    else {
        let user = new User(lastname, firstname);
        userList.push(user);
    }
    res.redirect('/user');
};

exports.userShow = function(req, res) {
    let iduser = req.params.iduser;
    res.send('Hello ' + userList[iduser]["firstname"]);
};

exports.userRemove = function (req, res) {
    let iduser = req.params.iduser;
    userList.splice(iduser, 1);
    res.redirect('/user');
};


