
// first class function where we can pass function in function treating it as a value 
function abc(val){          // abc will treat the given function as values in val variable
    val()
    console.log("hello..")
}

abc(function(){             // here function is given to abc 
    console.log("hey!")
})

// higher order function are those functions who can return and accept function in there parameters 
// OR 
// if a function does any one of this return or accept then also it is called as higer order function

function abcd(val){         // function abcd is a hof cause it is accepting function 
    val()
}

abcd(function(){
    console.log('this is hof accepting function..')
})

function abcd2(){               // hof returning a function
    return function(){
        console.log("this is hof returning function..")
    }
}

abcd2()() //this barcket are for second function in function


// pure functions vs impure functions

// pure : aisa function jo bahar ki values na badle
let purefnc = 12

function pure(){
    console.log("pure fnc")     // no outer values are affected by this function hence its a pure fnc
}
// impure : aisa function jo bahar ke vallues badle

function impure () {
    purefnc++                // here the fnc is changing the actual value of purefnc
}


// closures

// closure ek fnc jo return karta hai ek function aur jo fnc return ho raha hai vo fnc parent fnc ka koi variables use karta hai 

function closure(){
    let cl = 14
    return function(){
        console.log(cl);   // will not see output in console
    }
}


// lexical scoping 
// ek variable ka scope of access 

function lex(){
    let lex1 = 10                       // lex1 can be access anywhere in scope of lex fnc
    function lex2(){
        let lex2 = 11                   // lex2 can be accessed anywhere in scope of lex2 fnc but not outside
        function lex3 (){
            let lex3 = 12               // lex3 can be accessed anywhere in scope of lex3 fnc but not outside
        }
    }
}


// IIFE - immediately invoked function expressions 
// simple function which is wrapped inside a () then on calling will immediately run no need to call separetly

(function IIFE(){

    console.log("This is IIFE..")

}) ()                               // fnc IIFE will immediately run 


// Hoisting difference btwn function declaration and expression

// fnc declaration
fncdec()





function fncdec(){
    console.log("This is fnc declaration hoisting..")
}


// fnc expression 
hoist()                         



let hoist = function(){
    console.log("This is fnc expression hoisting..")            // throws error Cannot access 'hoist' before initialization
}