console.log("------------------- This is arrays session -----------------------")

//types of arrays declaration

let arr = [1,22,3,4,5,6]        //1
console.log(arr[1])

let arr1 = new Array;           //2

let arr2 = []                   //3

// array methods
// push, pop, shift, unshift, splice, slice, reverse, sort

// push
arr.push(1000)      // 1000 will be puched at the end of arr

// pop
arr.pop()           // will remove one element from end of arr

// shift
arr.shift()         // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// unshift
arr.unshift()       //Inserts new elements at the start of an array, and returns the new length of the array.

//splice
arr.splice()        //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// slice
let copy = arr.slice(2,5) // returns a new copy of array from start element to end element specified in slice (field)

// reverse
arr.reverse()           //Reverses the elements in an array in place

// sort
let sort = arr.sort(function(a,b){             // sort function accepts a fnc in which two elements can be named anything
    return a-b /* && b-a */               // returns ascending order a-b or descending order b-a
});

//---------------------------//
// Map

let ans = arr.map(function(val){        // map method uses function and based on the conditions in it it returns ans if conditon is incalid it returns undefined
    if(val > 10) return val;            // map tabhi banate hai jabh new array banana ho old array ke data ke basis pe
                                        // keep in mind jabhi map use hota hai tabh new empty array banta hai same as length of old array
})


// filter

let ans1 = arr.filter(function(val){    // filter apke old array ke kuch members ko new array me lata hai aur kuch ko chodta hai
    if (val>5) return true              // but it returns true or false
})

// reduce
// reduce is use to addup all elements of array into a single value

let reduce = arr.reduce(function(accumulator,val){
    return accumulator + val                        // each time accumulator value is added to val until last element of arr
},0)


// find
// find returns first existence of conditioned element

let find = [2,3,4,3,5,6,7]

let findAns = find.find(function(val){
    return val === 2;                       // this 2 will be 1st 2 in array if not present returns undefined
});


// some

let some = [23,54,46,98,95]

let someAns = some.some(function(val){      // returns true or false whether element present in array or not
    return val <23
});


// every 
// all conditions should be satisfied in every method

let every = [2,3,3,4,5,6,7]

let everyAns = every.every(function(val){
    return val < 6                          // will return booolean value if all elements passes condition or not
})


// destructuring
// it is a process of copying values of array into new array

let destructuring = [3,4,5,3,2,1]

let [a,b, ,c, ,d] = destructuring
