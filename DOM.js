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


// ---------------------------------------------------------------------------------------------------//

// Create a new list item <li> New Task </li> and add it to the end of ul

let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "New Task"
ul.appendChild(li)

// Create a new image element with a placeholder source and add it to the top of div


let img = document.createElement("img")
img.setAttribute("src", "https://images.pexels.com/photos/34192085/pexels-photo-34192085.jpeg")

document.querySelector("div").prepend(img)
img.classList.add("placeHolder")



// Select a first item in a list and delete it from the DOM

// let ul = document.queryselector("ul")
let li2 = document.querySelector("li")
ul.removeChild(li2)


// add class highlight to every even li of list in ul 

let li3 = document.querySelectorAll("ul li:nth-child(2n)")          // vvip

li3.forEach(element => {
    element.classList.add("highlight")
});


// add a class active to a button on click use classList.toggle()

let btn = document.querySelector("button")
btn.addEventListener("click", () => btn.classList.toggle("active"))

// set the size of all li elements in ul to 18px using .style

let li4 = document.querySelectorAll("li")
// console.log(li4)
li4.style.fontSize = "18px"
li4.forEach(val => {
    val.style.fontSize = "18px"
})