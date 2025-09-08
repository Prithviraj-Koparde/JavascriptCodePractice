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
