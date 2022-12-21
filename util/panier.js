'use strict';
class LignePanier 
{ 
    constructor(idf)
    { 
        this.idf = idf;
    } 

    ajouterIdf(qte)
    {
        this.idf = idf;
    }
    
    
    getIdf() 
    {
        return this.idf;
    }
    
}
module.exports = class Panier 
{ 
    constructor()
    { 
        this.liste = [];
    } 

    ajouterArticle(idf)
    { 
        var index = this.getArticle(idf);
        if (index == -1) this.liste.push(new LignePanier(idf));
    }
    
    getArticle(idf)
    {
        for(var i = 0 ; i <this.liste.length ; i++)
            if (idf == this.liste[i].getIdf()) return i;
        return -1;
    }
    supprimerArticle(idf)
    {
        var index = this.getArticle(idf);
        if (index > -1) this.liste.splice(index, 1);
    }
}