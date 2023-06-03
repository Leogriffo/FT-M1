'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}

BinarySearchTree.prototype.size = function (){
   //cuenta cuantos nodos hay
   //caso nodo hoja corto
   if(!this.left && !this.right) return 1
   if(this.left && !this.right) return 1 + this.left.size();
   if(!this.left && this.right) return 1 + this.right.size();
   if(this.left && this.right) return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.insert = function (value){
   if(value > this.value){
         if(this.right !== null){
            this.right.insert(value); //recursion
         }else{
            this.right = new BinarySearchTree(value)
         }
      }else{
      //izquierda
      
         if(this.left !== null){
            this.left.insert(value);
         }else{
            this.left = new BinarySearchTree(value)
         }
      }
   
};

BinarySearchTree.prototype.contains = function (value){
   if(value === this.value) return true;
   if (value > this.value){
     if (!this.right) {
      return false
  } else {
   return this.right.contains (value);
    }
   }else {

      if (!this.left) {return false
   }else{
      return this.left.contains (value);
   }
 }

};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order){
   if(order==='post-order'){
      
      if(this.left) this.left.depthFirstForEach(cb,order);
      if(this.right) this.right.depthFirstForEach(cb,order)
      cb(this.value)
   }
   else if(order === 'pre-order'){
      cb(this.value)
      if(this.left) this.left.depthFirstForEach(cb,order);
      if(this.right) this.right.depthFirstForEach(cb,order)
   }else{
      if(this.left) this.left.depthFirstForEach(cb,order);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb,order)
   }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb,array = []){ //instanciando el array por default sobreescribo el array
cb(this.value);
if(this.left) array.push(this.left); //si hay left lo guardo en un objeto
if(this.right) array.push(this.right); //si hay right lo guardo en un objeto

var proximo = array.shift() //quito el primer objeto del array

if(proximo) proximo.breadthFirstForEach(cb,array) //recursion del nodo que se llevo el cb


};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
