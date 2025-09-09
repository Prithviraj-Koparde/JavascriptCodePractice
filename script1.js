// Datatypes in JavaScript

// 1. Primitive Datatypes <- aisi values jinhe copy karne pe tumhe real copy milti hai 
// ex of primitive datatypes - String 3 types to declare string - "hello",'hello',`hello`, Number, Boolean (true, flase), 
// Null - null ka matlab tumne jaan puchke value nahi di, Undefined - matlab tumne variable ko value nahi di hai to jo engine value assign karega vo undefined v alue
// , Symbol, BigInt - how to declare bigint let a = 123n; where n is suffix for bigint

// 2. Non-Primitive Datatypes <- aisi values jinhe copy karne pe tumhe real copy nahi milti but tumhe unki parent reference milti hai
// ex of non-primitive datatypes - Objects, Arrays, Functions


let a = 12;
let b = a;

// Dynamic Typing - js me tum kisi bhi variable m kisi bhi type ki value kabhi bhi store kar sakte ho
// in other words js me static type nahi hota dynamic type hota hai

let c = 12; // c is number
c = "hello"; // c is string
c = true; // c is boolean   
c = null; // c is null
c = undefined;
c = Symbol("hello"); // c is symbol
c = 123n; // c is bigint                // here c variable is changing its type of which js dont give a damn but if this happened in java it would give error


// Type of quirks in js - its a weird behaviour of js
// in which js engine do some type coercion to make the expression valid
// how to check - on console type typeof variable name and ask him weird things it will make it valid expressions 
// ex - type of 12 -> number, type of "hello" -> string, type of true -> boolean


// Type coercion - isme ek concept automatically get converted to make the expression valid
//for ex - "5" + 5 -> "55" (string) because js knows that + stands for addition and as well as for concatenation
// but for "5" - 1 -> 4 (number) because - only stands for subtraction so js convert "5" to number 5 and then do the subtraction


//truthy and falsy values in js
// falsy values - 0, "", null, undefined, NaN, false will get converted to false in boolean context
// for ex - !!0 -> false, !!"" -> false, !!null -> false, !!undefined -> false, !!NaN -> false, !!false -> false

// truthy values - "hello", 1, -1, [], {}, function(){} will get converted to true in boolean context
// for ex - !!"hello" -> true, !!1 -> true, !!-1 -> true, !![] -> true, !!{} -> true, !!function(){} -> true