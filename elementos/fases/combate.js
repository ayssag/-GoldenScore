/*
    O vilão é o Leão de Neméia. Ele inicia o combate com 400 de vida e 2 possibilidades de ataque.
    O combate se encerra quando o leão ou o herói atinge 0 de vida.
    Caso o herói saia vitorioso, ele ganha 80 moedas e 100 XP de vida.
*/

const Vilao = require('../personagens/vilao');

function displayCombate(displayHeroi, displayVilao){
    var msg = `
          ,%%%%%%%%%%                                \\\\ /////
        ,%%/\\%%%%/\\%%                                |      |
        ,%%%\\  ""  /%%%                             (| _  _ |)
%.      %%%%/ o  o \\%%%                              |  |   |
%%.     %%%%    _  |%%%                              |  __  |
%%       %%%%(__Y__)%%                         >>>___/\\_^__/\\___<<<
//       ;%%%% \\-/%%%                          /               |||  \\
((       /   %%%%%%%                          
\\\\    .           | 
    \\\\/         ) | |          (1) Espada  (2) Arco e Flecha  (3) Estilingue (4) Fugir
    \\         /_ | |__
    (___________)))))))                                   

        |${displayVilao}|                                 |${displayHeroi}|
    `
    return msg;
}
function ataqueLeao(){
    let ataque = Math.floor(Math.random() * 1001);

    if(ataque % 2 == 0){
        return 'mordida';
    }else{
        return 'rosnado';
    }
}

function ataqueHeroi(arma, itens){
    let dano = 0;
    if(itens.includes(arma)){
        if(arma == 'espada'){
            dano = 30;
        }else if(arma == 'estilingue'){
            dano = 15;
        }else if(arma == 'arcoeflecha'){
            dano = 50;
        }
    }
    return dano;
}

function combate(heroi, input){
    leao = new Vilao(400, ['mordida, rosnado']);
    let dano;
    let finalCombate = false;
    let arma;
    let resultado = false;
    displayVilao = '';
    displayHeroi = '';
    
    while(!finalCombate){
        console.clear();
        console.log(displayCombate(displayHeroi, displayVilao));

        heroi.status();
        leao.status();
        // Ataque do herói
        do{
            arma = +input('Escolha a arma do golpe ::::>>> ');
        }while(arma != 1 && arma != 2 && arma != 3 && arma != 4);

        if(arma == 1){
            displayHeroi = 'Espada!!!! -30 XP';
            dano = ataqueHeroi('espada', heroi.itens);
        }else if(arma == 2){
            displayHeroi = 'Arco e Flecha!!!! -50 XP';
            dano = ataqueHeroi('arcoeflecha', heroi.itens);
        }else if(arma == 3){
            displayHeroi = 'Estilingue!!!! -15 XP';
            dano = ataqueHeroi('estilingue', heroi.itens);
        }else if(arma == 4){
            finalCombate = true;
        }

        if(leao.vida - dano <= 0){
            leao.vida = 0;
            finalCombate = true;
        }else{
            leao.vida -= dano;
        }

        // Ataque do vilão
        if(!finalCombate){
            golpeLeao = ataqueLeao();
            if(golpeLeao == 'mordida'){
                displayVilao = 'Mordida! -30 XP'; 
                dano = 30;
                if(heroi.vida - dano <= 0){
                    heroi.vida = 0;
                    finalCombate = true;
                }else{
                    heroi.vida -= dano;
                }
            }else if(golpeLeao == 'rosnado'){
                displayVilao = 'Rosnado! -15 XP';
                dano = 15;
                if(heroi.vida - dano <= 0){
                    heroi.vida = 0;
                    finalCombate = true;
                }else{
                    heroi.vida -= dano;
                }
            }
        }
    }

    heroi.status();
    leao.status();

    if(leao.vida == 0){
        msg = `
██╗   ██╗██╗████████╗ ██████╗ ██████╗ ██╗ █████╗ 
██║   ██║██║╚══██╔══╝██╔═══██╗██╔══██╗██║██╔══██╗
██║   ██║██║   ██║   ██║   ██║██████╔╝██║███████║
╚██╗ ██╔╝██║   ██║   ██║   ██║██╔══██╗██║██╔══██║
 ╚████╔╝ ██║   ██║   ╚██████╔╝██║  ██║██║██║  ██║
  ╚═══╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝        
`;
    heroi.vida += 100;
    heroi.dinheiro += 80;    
    resultado = true;
    }
    else{
        msg = `
██████╗ ███████╗██████╗ ██████╗  ██████╗ ████████╗ █████╗ 
██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔═══██╗╚══██╔══╝██╔══██╗
██║  ██║█████╗  ██████╔╝██████╔╝██║   ██║   ██║   ███████║
██║  ██║██╔══╝  ██╔══██╗██╔══██╗██║   ██║   ██║   ██╔══██║
██████╔╝███████╗██║  ██║██║  ██║╚██████╔╝   ██║   ██║  ██║
╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝
`;
        resultado = false;
    }
    console.clear();
    console.log(msg);
    input('Aperte enter para continuar...');

    return resultado;
}

module.exports = combate;