/*
    Função que realiza a compra de elixir.
    Elixir é uma substância mágica que faz o herói recuperar 50 XP de vida.
    Para obter elixir, o herói precisa ter dinheiro o suficiente para a compra.
*/

const msg = `
        ((((
    ((((
        ))))
   _ .---. 
  ( |'---'|    (1) Elixir [$15] (+50 XP)
   \\|     |    (2) Sair
   : .___, :
    \\-----'
`

function comprarElixir(heroi, input){
    let opcao;
    let acao = true;
    let despesa = 0;

    while(acao){
        do{
            console.clear();
            heroi.status();
            console.log(msg);
            opcao = +input('Escolha uma ação ::::>>> ');
        }while(opcao != 1 && opcao != 2);

        if(opcao == 1){
            despesa = 15;
            if(heroi.dinheiro - despesa >= 0){
                heroi.vida += 50;
                heroi.dinheiro -= despesa;
            }
        }
        else if(opcao == 2){
            acao = false;
        }
    }
}

module.exports = comprarElixir;