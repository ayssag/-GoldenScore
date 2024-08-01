/*
    Encruzilhada é o ponto inicial da jornada e pra onde o herói pode voltar após o combate ou após sair da taverna. 
    O mapa completo do jogo é mostrado e o herói pode escolher seu destino através das opções mostradas.
*/
const taverna = require('./taverna');
const mapa = require('../cenarios/mapa');
const nemeia = require('./nemeia');
const palacio = require('./palacio');
const input = require('prompt-sync')({sigint: true});

const msg = `
███████╗███╗   ██╗ ██████╗██████╗ ██╗   ██╗███████╗██╗██╗     ██╗  ██╗ █████╗ ██████╗  █████╗ 
██╔════╝████╗  ██║██╔════╝██╔══██╗██║   ██║╚══███╔╝██║██║     ██║  ██║██╔══██╗██╔══██╗██╔══██╗
█████╗  ██╔██╗ ██║██║     ██████╔╝██║   ██║  ███╔╝ ██║██║     ███████║███████║██║  ██║███████║
██╔══╝  ██║╚██╗██║██║     ██╔══██╗██║   ██║ ███╔╝  ██║██║     ██╔══██║██╔══██║██║  ██║██╔══██║
███████╗██║ ╚████║╚██████╗██║  ██║╚██████╔╝███████╗██║███████╗██║  ██║██║  ██║██████╔╝██║  ██║
╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝                                                        
`

function encruzilhada(heroi){
    let opcao;
    let acao = true;

    while(acao){
        do{
            console.clear();
            console.log(msg);
            console.log(mapa);

            opcao = +input('(Destino) ::::>>> ');

        }while(opcao != 1 && opcao != 2 && opcao != 3 && opcao != 4);

        if(opcao == 1){
            heroi = nemeia(heroi, input);
        }else if(opcao == 2){
            heroi = taverna(heroi, input);
        }else if(opcao == 3){
            palacio(heroi, input);
        }
        else if(opcao == 4){
            acao = false;  
        }
    }
}

module.exports = encruzilhada;