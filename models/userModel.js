const db = require('../util/database');

class Formation {
    constructor(id, Nom, Prix, Debut, Fin) {
        this.id = id;
        this.Nom = Nom;
        this.Prix = Prix;
        this.Debut = Debut;
        this.Fin = Fin;
    }
    static fetchAll() {
        return db.execute("SELECT * FROM Formation");
    }
    static Add(idformation) {
        return db.execute("INSERT INTO inscription SET ?", idformation);
    }
}

module.exports = Formation;




// var connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password :'Salmane',
//     database :'formations'
// });

// exports.listerFormations = function (callback) {
//     connection.connect(function (err) {
//         if (err)
//             console.log('error')
//         else
//             connection.query("SELECT * FROM Formation", function (err, result, fields) {
//                 if (err) throw err;
//                 else {
//                     callback(result);
//                 }
//             });
//     });
// }