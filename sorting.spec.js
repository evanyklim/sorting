describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('sorts an array of 5 elements', function(){
        expect( bubbleSort([4,3,5,2,1]) ).toEqual( [1,2,3,4,5] );
    });

	it('sorts an array of 5 elements', function(){
        expect( bubbleSort([5,4,3,2,1]) ).toEqual( [1,2,3,4,5] );
    });

    it('sorts an array of 10 elements', function(){
        expect( bubbleSort([10,9,8,7,6,5,4,3,2,1]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
    }); 

});

describe('Merge Sort Logic', function(){
    it('handles an empty array', function(){
        expect( merge([],[]) ).toEqual( [] );
    });
 	it('is able to merge two sorted arrays', function(){
        expect( merge([5,6,7,8],[1,2,3,4]) ).toEqual( [1,2,3,4,5,6,7,8] );
    });
});

describe('Split Array function', function() {

	it('is able to handle an empty array', function() {
  		expect( split([]) ).toEqual( [] );
    });

	it('is able to split an array into two halves', function() {
  		expect( split([1,2,3,4]) ).toEqual( [ [1,2] , [3,4] ] );
    });

    it('is able to split an array into two halves', function() {
  		expect( split([1,2,3,4,5]) ).toEqual( [ [1,2] , [3,4,5] ] );
    });
});

describe('Merge Sort', function(){
    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });

	it('sorts an array of 5 elements', function(){
        expect( mergeSort([5,4,3,2,1]) ).toEqual( [1,2,3,4,5] );
    });

    it('sorts an array of 7 elements', function(){
        expect( mergeSort([6,4,7,2,1,3,3]) ).toEqual( [1,2,3,3,4,6,7] );
    });

    it('sorts an array of 10 elements', function(){
        expect( mergeSort([10,9,8,7,6,5,4,3,2,1]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
    }); 

    it('sorts a randomized array of 100 elements', function(){
        expect( mergeSort([88, 60, 16, 22, 24, 72, 87, 3, 60, 73, 
        	               99, 10, 74, 61, 96, 56, 56, 97, 19, 79, 
        	               2, 50, 43, 37, 39, 4, 42, 97, 43, 81, 
        	               17, 26, 49, 14, 41, 38, 80, 83, 89, 51, 
        	               51, 42, 37, 33, 39, 38, 72, 98, 100, 65,
        	               61, 22, 68, 29, 30, 21, 46, 51, 100, 93, 
        	               93, 67, 7, 84, 60, 44, 6, 58, 47, 39, 
        	               89, 37, 24, 75, 100, 78, 78, 73, 43, 30, 
        	               49, 56, 18, 17, 67, 80, 15, 96, 76, 18, 
        	               13, 95, 74, 10, 64, 38, 71, 7, 79, 98]) ).toEqual( 
                          [2,3,4,6,7,7,10,10,13,14,15,16,17,17,18,18,19,21,
                           22,22,24,24,26,29,30,30,33,37,37,37,38,38,38,39,
                           39,39,41,42,42,43,43,43,44,46,47,49,49,50,51,51,
                           51,56,56,56,58,60,60,60,61,61,64,65,67,67,68,71,
                           72,72,73,73,74,74,75,76,78,78,79,79,80,80,81,83,
                           84,87,88,89,89,93,93,95,96,96,97,97,98,98,99,100,100,100] );
    }); 


});