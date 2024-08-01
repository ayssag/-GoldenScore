/*
    Destino final do herói. A missão só foi completa se o herói trouxer a cabeça do Leão de Neméia para o rei.
*/

var msg = `
    
       [][][] /""\\ [][][] 
        |::| /____\\ |::|
        |[]|_|::::|_|[]|
        |::::::__::::::|
        |:::::/||\\:::::|
        |:#:::||||::#::|


`

function palacio(heroi, input){
    if(heroi.itens.includes('cabeca_do_leao')){
        msg += `Você completou a missão!`;
    }
    else{
        msg += `Você não completou a missão...`;
    }
    console.clear();
    console.log(msg);
    input('\n\nAperte enter para continuar...');
}

module.exports = palacio;