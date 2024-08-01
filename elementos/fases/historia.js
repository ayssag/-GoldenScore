/* História do jogo */

const input = require('prompt-sync')({sigint: true});

const msg = `
Filho bastardo de Zeus, Hércules estava destinado ao trono de Micenas. Contudo, Hera, mulher oficial do poderoso rei dos deuses olímpicos, planejou um parto prematuro para que seu filho, Euristeu, assumisse o trono antes de Hércules.
Em uma busca por redenção, ele visitou o Oráculo de Delfos que lhe informou que ele deveria servir ao rei Euristeu por 10 anos e realizar uma árdua tarefa para que sua honra fosse retomada. 


Você começa essa jornada com 300 XP de vida e apenas 100 moedas. Use-as com sabedoria. 
`

function historia(){
    console.clear();
    console.log(msg);
    input('Aperte enter para continuar...');
}

module.exports = historia;