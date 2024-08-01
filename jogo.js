const menu = require('./elementos/fases/menu');
const fim = require('./elementos/cenarios/fim');
const historia = require('./elementos/fases/historia');
const encruzilhada = require('./elementos/fases/encruzilhada');
const Heroi = require('./elementos/personagens/heroi');

var heroi = new Heroi(300);

if(menu()){
    historia();
    encruzilhada(heroi);
    console.clear();
}
console.log(fim);