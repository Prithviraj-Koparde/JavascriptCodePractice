function print(){       //function declaration
    console.log("function declaration");
}

let i=0;
while(i<2){
    print();
    i++;    
}

//function expression

let a = function(){
    console.log("Function Expression");
};

let j=0;
while(j<2){
    a();   
    j++;
}

// This is arrow function

let b = ()=>{
    console.log("Arrow Function");
};

let k=0;
while(k<2){
    b();
    k++;
}

// different input for dynamic output 

let x = function (input){
    console.log(`${input} , This is dynamic output`);
};

x("Hello");
x("Hi");
x("Hey");
x("Greetings");


// Default parameters

function add(q = 0, w=0){ //if no value is given to parameters then default value will be taken which here is 0 you can give any values here
    console.log(q+w);
}

add();  //no value is given to parameters so default value will be taken

// rest and spread operator

// these are defined as three dots ... but they have different functions 
// if ... is declared within function space then its a rest operator
// and ... is declared inside of array or objects the its a spread operator

function rest(... input){       // this is rest operator it will take any number of inputs and make an array of it
    console.log(input);
}

rest(1,2,3,4,5,6,7); // these parameters will be displayed in console as an array
rest("a","b","c","d","e","f");
rest(1,"a",2,"b",3,"c");