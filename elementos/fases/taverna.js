/*
  Taverna é onde o herói pode comprar comida, elixir e armas.
  Comida e elixir recuperam vidas. Armas causam dano em vilões.
*/

const comprarComida = require('../compras/comida');
const comprarArma = require('../compras/armas');
const comprarElixir = require('../compras/elixir');

const msg = `
  []___
 /    /\\     (1) Armas   (2) Comida  (3) Elixir (4) Sair
/____/__\\
|[][]||||
`

function taverna(heroi, input){
  let opcao;
  let acao = true;
  while(acao){
    do{
      console.clear();
      heroi.status();
      console.log(msg);
      opcao = +input('Escolha uma ação ::::>>> ');
    }while(opcao != 1 && opcao != 2 && opcao != 3 && opcao != 4);

    if(opcao == 1){
      comprarArma(heroi, input);
    }else if(opcao == 2){
      comprarComida(heroi, input, input);
    }else if(opcao == 3){
      comprarElixir(heroi, input);
    }else if(opcao == 4){
      acao = false;
    }
  }
  return heroi;
}

module.exports = taverna;