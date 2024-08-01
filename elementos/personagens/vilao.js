const Personagem = require("./personagem");

class Vilao extends Personagem {
    ataques = [];

    constructor(vida, ataques){
        super(vida);
        this.ataques.push(ataques);
    }

    status(){
        var msg = `
##############################################################
# Vilão    # Vida: ${this.vida}  
##############################################################
`
        
        console.log(msg);
    }
}

module.exports = Vilao;