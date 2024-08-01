/*
    Função que realiza a compra de comidas.
    Para obter comida e restaurar sua vida, o herói precisa ter dinheiro o suficiente para a compra.
*/

const msg = `
     ,--./,-.
    / #      \\   (1) Fruta [$3] (+10 XP)
   |          |  (2) Ensopado [$10] (+20 XP) 
   \\         /   (3) Carne de caça [$7] (+30 XP)
    \\ ._,._,/    (4) Sair
`

function comprarComida(heroi, input) {
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
            despesa = 3;
            if(heroi.dinheiro - despesa >= 0){
                heroi.vida += 10;
                heroi.dinheiro -= despesa;
            }
        }
        else if(opcao == 2){
            despesa = 10;
            if(heroi.dinheiro - despesa >= 0){
                heroi.vida += 20;
                heroi.dinheiro -= despesa;
            }
        }
        else if(opcao == 3){
            despesa = 7;
            if(heroi.dinheiro - despesa >= 0){
                heroi.vida += 30;
                heroi.dinheiro -= despesa;
            }
        }
        else if(opcao == 4){
            acao = false;
        }
    }
}

module.exports = comprarComida;