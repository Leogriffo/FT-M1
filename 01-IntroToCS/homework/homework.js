'use strict';
function BinarioADecimal(num) {
   /*codigo*/

   var array = num.split("")//divide el string en pequeños array
   var sum = 0;
   for (var i = 0; i <array.length; i++){
      sum = sum + Math.pow(2,array.length -1-i) * array[i] // math.pow retorna la base elevada al exponente
   }
   return sum;
}

function DecimalABinario(num) {
/*
   if( num <= 0 ) return "0000";
   var array = [];
   while (num > 0){ // mientras el num sea mayor que 0
      array.unshift(num%2); // unshift coloca el nuevo array adelante del q ya esta
      num = Math.floor(num/2) // math.floor redomdea para abajo
   }
   return array.join(""); //join une los array como string
} 
*/

var resultado = ""

while(num !==0){
   resultado = (num%2) + resultado
   num = Math.floor(num/2)
}
return resultado;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
