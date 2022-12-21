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

