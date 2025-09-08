//var, let, and const – Line-by-Line Comparison

var a = 10;   // this is old quick way to declare a variable
              // var is not used because its a functioned scoped variable because it can be accessed anywhere in the function
              // and when variable is declared it is added to the window which in not in the case of let and const 
let b;   // this is the new way to declare a variable
const c = 30; // this is the new way to declare a constant variable

var a = 10;  // redeclaration is allowed for var
b = 20;      // redeclaration is not allowed for let
//c = 30;      // reassignment is not allowed for const

var a; // this is called declaration
a = 10; // this is called initialization
a = 20; // this is called reassignment

b = 10; // this is called initialization
b = 20; // this is called reassignment

// Temporal Dead Zone (TDZ) - ye vo area hai jisme js ko malum hota hai ki agla variable kya declare huva hai but vo use access nahi kar sakta.
// TDZ is the time between the entering of the scope and the actual declaration of the variable.

console.log(d);
// }        // this is tdz for d
// }
let d = 10; // ReferenceError: Cannot access 'd' before initialization error ayega because d is in TDZ

// e being hoisted will be like this declare part will be on the top
// var e = undefined; <-- var dont have tdz let and const has
// Hoisting of variables - ye vo part hai jisme variable tdz me hota hai but uska memory allocation ho chuka hota hai.
                           // vo kaise kyu ki jab variable declare and initialize hota hai uske 2 part hoo jate hai 
                           // like this var a = 10; this will get seperated as var a; and a = 10;
                           // so var always goes into hoisting phase

console.log.e; // undefined because e is hoisted                        
var e = 10;
// e=10; // and initiallize part will go down 