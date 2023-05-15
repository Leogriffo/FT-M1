/*          0    1     2     4
        A
        B
        C
        D
*/

const layout = [
    [
       { type: 'VIP', booked: false },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: false },
    ],
    [
       { type: 'NORMAL', booked: false },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: false },
       { type: 'NORMAL', booked: false },
    ],
    [
       { type: 'NORMAL', booked: false },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: false },
    ],
    [
       { type: 'ECONOMIC', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'ECONOMIC', booked: false },
    ],
    [
       { type: 'ECONOMIC', booked: false },
       { type: 'ECONOMIC', booked: true },
       { type: 'ECONOMIC', booked: false },
       { type: 'ECONOMIC', booked: false },
    ],
 ];

const getRowNumber = (letter) => {
  return letter.toUpperCase().charCodeAt(0) - 65;  //toUpperCase = convierte a mayuscula en caso de q sea minuscula

}

const getSeatStatus = (row, column ) => {
      let rowIndex = getRowNumber(row) // recibe A ---> 0
      let rowIndicado = layout[rowIndex] // posicione sobre el array
      let seat = rowIndicado[column] // obtube la silla indicada
      return seat.booked  

}



function checkSeatStatus(str, num){
    
    if(typeof str !== 'string') throw new TypeError('First parameter is not a string')
    if(typeof num !== 'number') throw new TypeError ('Second parameter is not a number')

   return getSeatStatus(str,num)
};

function book (row,column) {
   if(getSeatStatus(row,column)) return'Seat in ' +row+column+ ' successfully booked'
   let rowIndex = getRowNumber(row)
   let rowIndicado = layout[rowIndex]
   let seat = rowIndicado[column ] 
   seat.booked = true;
   return 'Seat in ' + row + column + ' is already booked'

}




module.exports = {
    checkSeatStatus,
    getRowNumber,
    getSeatStatus,
    book,
}