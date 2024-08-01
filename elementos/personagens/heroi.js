const Personagem = require("./personagem");

class Heroi extends Personagem {
    itens = [];
    dinheiro = 100;

    constructor(vida){
        super(vida);
    }

    status(){
        var msg = `
##############################################################
# Hércules # Vida: ${this.vida} # Dinheiro: ${this.dinheiro} 
##############################################################
# Itens    # ${this.itens}                                       
##############################################################
`
        
        console.log(msg);
    }
}

module.exports = Heroi;