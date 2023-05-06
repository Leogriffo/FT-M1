'use strict';

function BinarioADecimal(num) {

   var array = num.split("")//divide el string en pequeños array
   var sum = 0;
   for (var i = 0; i< array.length; i++){
      sum = sum + Math.pow(2,array.length -1-i)* array[i]// math.pow retorna la base elevada al exponente
   }
   return sum;
}

function DecimalABinario(num) {
   var resultado = "";
   
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
