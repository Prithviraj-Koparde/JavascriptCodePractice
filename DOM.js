// document.getElementsById("id")         fetch html by id
// document.getElementsByClassName("class")    fetch html ele by classname          these both were use in old js code 

// document.querySelector("")           selects only first id or class and dont select id or class with same name after that
// document.querySelectorAll("")        selects all same named id or class

// innerHtml , innerText , textContent
// we can use any of these tags to make change to text content in h1 or 2,3,4,5,6

let h1 = document.querySelector("h1")
h1.innerHTML = "im fine!"               // "hello how are you!" will changed to "im fine" so we can use any three of these properties to change text
// h1.innerHTML = "<i>im fine!</i>"    // innerHtml changes html in element we can write html code like i tage in it so it will get changed to itallic
// h1.innerText = "im fine!"
// h1.textContent = "im fine!"
console.dir(h1)


// 1. setAttribute("attribute name","what value to set")  value set karna

let a = document.querySelector("a")
a.setAttribute("href", "https://www.google.com")
// getAttribute()

// 2. getAttribute("attribute name to get its value")  value fetch karna

let a2 = document.querySelector("#a2")
console.log(a2.getAttribute("href"))

// 3. removeAttribute("attribute name to remove it")
let a3 = document.querySelector("#a3")
a3.removeAttribute("href")                  // href attribute will be removed from a tag on browser



// Dynamic DOM manipulation :- createElement, appendChild, removeChild, prepend

// createElement, appendChild (html at bottom in body), prepend (html at top in body)

let text = document.createElement("h1")
text.textContent = "This is createdElement!"
//console.log(text)
document.querySelector("body").prepend(text) //.appendChild(text)       // will appear on screen

// a3.removeChild()  this will remove a3 tag from browser html not machine html



// ----------------------------------------------------------------------------------------------//


// Style updates using .style and classList
// .style.
h1.style.color = "red"      // there are many attributes in style section you can change if you go in h1 console properties
h1.style.backgroundColor = "lightgreen"
h1.style.fontFamily = ""
h1.style.border = " 3px solid black"


// .classList.add,remove,toggle

let para = document.querySelector("p") // .classList.add("dec")
// OR

para.classList.add("dec")                   // here dec is inner style in html file which is created inside style tag
// para.classList.remove("dec")             // remove will remove the style from para variable
// para.classList.toggle("dec")             // toggle ek to existing style enable hoga to use disable karega aur disable hoga to enable karega 
