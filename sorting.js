// bubble sort

var bubbleSort = function(arr) {
    for (var j = 0; j < arr.length - 1; j++) {
        for (var i = 0; i < arr.length - 1; i++) {    // 1: [3,2,1] 
            if ( arr[i] > arr[i+1] ) {            // 2: [2,3,1]
                var larger = arr[i],              // 3: [2,1,3]
                smaller = arr[i+1];            // 4: []
                arr[i] = smaller;
                arr[i+1]  = larger;
            }
        }
    }
    return arr;
}

var merge = function(left, right) {
    var list = [];

    while (left.length && right.length) {             // returns bool
        if ( left[0] <= right[0] ) {         
            list.push(left.shift());
        } else {
            list.push(right.shift());
        }
    }
    if (left.length >= 1) {
        list = list.concat(left);
    }
    if (right.length >= 1) {
        list = list.concat(right);
    }
    return list;
}

var split = function(arr) {
    
    if (arr.length == 0) { return []; }

    var middle = Math.floor(arr.length / 2);
    var left = [], right = [];

    for (var i = 0; i < middle; i++) {
        left.push(arr[i]);
    };
    for (var i = middle; i < arr.length; i++) {
        right.push(arr[i]);
    };
    return [left, right];
}

var mergeSort = function(arr) {
    if (arr.length <= 1) { return arr }

    var mergeArray = split(arr);        // split array into 2 arrays - left and right 
                                        // that are unsorted
    return merge( mergeSort(mergeArray[0]), mergeSort(mergeArray[1]) )
}

// test and compare

// for(var i=12; i < 20; i++) {
//     var num_items = Math.pow(2,i);
//     var native_test_array = [];
//     var b_test_array = [];
//     var m_test_array = []
//     for(var j=0; j < num_items; j++) {
//         var rand = Math.floor(Math.random() * num_items);
//         native_test_array.push(rand);
//         b_test_array.push(rand);
//         m_test_array.push(rand);
//     }

//     console.time(num_items + "native");
//     native_test_array.sort(function(a,b){ return a-b; });
//     console.timeEnd(num_items + "native");

//     console.time(num_items + "bubble");
//     bubbleSort(b_test_array);
//     console.timeEnd(num_items + "bubble");

//     console.time(num_items + "merge");
//     mergeSort(m_test_array);
//     console.timeEnd(num_items + "merge");  
// }

