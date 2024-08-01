/*
    O vilão é o Leão de Neméia. Ele inicia o combate com 400 de vida e 2 possibilidades de ataque.
    O combate se encerra quando o leão ou o herói atinge 0 de vida.
    Caso o herói saia vitorioso, ele ganha 80 moedas e 100 XP de vida.
*/

const Vilao = require('../personagens/vilao');

var msg = `
            ,%%%%%%%%%%                                \\\\ /////
          ,%%/\\%%%%/\\%%                                |      |
         ,%%%\\  ""  /%%%                              (| _  _ |)
 %.       %%%%/ o  o \\%%%                              |  |   |
  %%.     %%%%    _  |%%%                              |  __  |
   %%      %%%%(__Y__)%%                         >>>___/\\_^__/\\___<<<
  //       ;%%%% \\-/%%%                         /               |||  \\
 ((       /   %%%%%%%                          
  \\\\    .           |
    \\\\/         ) | |             (1) Espada  (2) Arco e Flecha  (3) Estilingue
     \\         /_ | |__
     (___________)))))))
`

function ataqueLeao(){
    let ataque = Math.floor(Math.random() * 11);

    if(ataque % 2 == 0){
        return 'mordida';
    }else{
        return 'rosnado';
    }
}

function ataqueHeroi(arma, itens){
    if(itens.includes(arma)){
        if(arma == 'espada'){
            return 30;
        }else if(arma == 'estilingue'){
            return 15;
        }else if(arma == 'arcoeflecha'){
            return 50;
        }
    }else{
        return 0;
    }
}

function combate(heroi, input){
    leao = new Vilao(400, ['mordida, rosnado']);
    let dano;
    let finalCombate = false;
    let arma;
    let resultado = false;
    
    while(!finalCombate){
        console.clear();
        console.log(msg);

        heroi.status();
        leao.status();
        // Ataque do herói
        do{
            arma = +input('Escolha a arma do golpe ::::>>> ');
        }while(arma != 1 && arma != 2 && arma != 3);

        if(arma == 1){
            dano = ataqueHeroi('espada', heroi.itens);
        }else if(arma == 2){
            dano = ataqueHeroi('arcoeflecha', heroi.itens);
        }else if(arma == 3){
            dano = ataqueHeroi('estilingue', heroi.itens);
        }

        if(leao.vida - dano <= 0){
            leao.vida = 0;
            finalCombate = true;
        }else{
            leao.vida -= dano;
        }
        // Ataque do vilão
        golpeLeao = ataqueLeao();
        if(golpeLeao == 'mordida'){
            dano = 30;
            if(heroi.vida - dano <= 0){
                heroi.vida = 0;
                finalCombate = true;
            }else{
                heroi.vida -= dano;
            }
        }else if(golpeLeao == 'rosnado'){
            dano = 15;
            if(heroi.vida - dano <= 0){
                heroi.vida = 0;
                finalCombate = true;
            }else{
                heroi.vida -= dano;
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