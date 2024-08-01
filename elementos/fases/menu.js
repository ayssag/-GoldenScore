/* Menu inicial do jogo */

const input = require('prompt-sync')({sigint: true});
const msg = require('../cenarios/inicio');

function menu() { 
    var opcao;
    while(true){
        console.clear();
        console.log(msg);

        opcao = +input();
        if(opcao == 1){
            return true;
        }
        else if(opcao == 2){
            return false;
        }
    }
}

module.exports = menu;