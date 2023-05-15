const{checkSeatStatus,getRowNumber,getSeatStatus,book} = require ('../homework' );



describe('Checking function checkSeatStatus', () =>{
    it('checkSeatStatus is a function', () =>{
        expect(typeof checkSeatStatus).toBe('function');
    });
    it('CheckSeatStatus debe recibir primer parametro string, caso contratio seria error', () => {
    expect(() =>checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
    });
    it('CheckSeatStatus debe recibir segundo parametro numero, caso contratio seria error', function() {
        expect(() =>checkSeatStatus('B')).toThrow(new TypeError('Second parameter is not a number'));
        });
    
    it('checkSeatStatus si esta o no bockeada una silla', () =>{ 
        expect(checkSeatStatus('A',1)).toBe(true);
    }); 
})

describe('Checking function getRowNumber', () => {
    it('getRowNumber is a function', () =>{
        expect(typeof getRowNumber).toBe('function');
    });

})

describe('Book testing', function () {
    it('Debo bookear la silla, en caso que este libre', function (){
        expect(book('A',1)).toBe('Seat in A1 successfully booked')
    })
    it('Debo responder que la silla  ya esta ocupada, en caso que no este libre', function (){
        expect(book('A',3)).toBe('Seat in A3 is already booked')
    })
})