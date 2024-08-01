 /* 
    Função que realiza a compra de uma arma.
    Para obter uma arma, o herói precisa ter dinheiro o suficiente para a compra.
    Só é possível ter uma arma de cada tipo, ou seja, se o herói já tiver uma arma de determinado tipo, ele não poderá comprá-la novamente.
    Entre parênteses, em cada item do menu de opções, está o dano causado por um ataque de determinada arma.
*/

const msg = `
       (        
        \\        (1) Espada [$20] (-30 XP)
        )        (2) Arco e flecha [$20] (-50 XP)
    ##-------->  (3) Estilingue [$10] (-15 XP)
        )        (4) Sair
        /        
       (         
`
function comprarArma(heroi, input){
    let opcao;
    let acao = true;
    let despesa = 0;

    while(acao){
        do{
            console.clear();
            heroi.status();
            console.log(msg);
            opcao = +input('Escolha uma ação ::::>>> ');
        }while(opcao != 1 && opcao != 2 && opcao != 3 && opcao != 4);

        if(opcao == 1){
            despesa = 20;
            if(!heroi.itens.includes('espada') && heroi.dinheiro - despesa >= 0){
                heroi.itens.push('espada');
                heroi.dinheiro -= despesa;
            }
        }else if(opcao == 2){
            despesa = 20;
            if(!heroi.itens.includes('arcoeflecha') && heroi.dinheiro - despesa >= 0){
                heroi.itens.push('arcoeflecha');
                heroi.dinheiro -= despesa;
            }
        }else if(opcao == 3){
            despesa = 10;
            if(!heroi.itens.includes('estilingue') && heroi.dinheiro - despesa >= 0){
                heroi.itens.push('estilingue');
                heroi.dinheiro -= despesa;
            }
        }else if(opcao == 4){
            acao = false;
        }
    }
}

module.exports = comprarArma;