/*
    Neméia é a cidade onde o herói irá enfrentar o vilão (Leão de Neméia).
    Aqui é chamada a função de combate.
*/

const combate = require('./combate');

const msg = `
███╗   ██╗███████╗███╗   ███╗███████╗██╗ █████╗ 
████╗  ██║██╔════╝████╗ ████║██╔════╝██║██╔══██╗
██╔██╗ ██║█████╗  ██╔████╔██║█████╗  ██║███████║
██║╚██╗██║██╔══╝  ██║╚██╔╝██║██╔══╝  ██║██╔══██║
██║ ╚████║███████╗██║ ╚═╝ ██║███████╗██║██║  ██║
╚═╝  ╚═══╝╚══════╝╚═╝     ╚═╝╚══════╝╚═╝╚═╝  ╚═╝


Hércules recebeu de Euristeu a tarefa de derrotar o Leão de Neméia, fera terrível que vinha assolando os arredores da cidade de Neméia, e apresentar o seu corpo ao rei Euristeu. 

Utilize das armas a sua disposição para derrotá-lo.

`

function nemeia(heroi, input){
    console.clear();
    console.log(msg);
    input('Aperte enter para continuar...');

    if(combate(heroi, input)){
        heroi.itens.push('cabeca_do_leao');
    }

    return heroi;
}   

module.exports = nemeia;