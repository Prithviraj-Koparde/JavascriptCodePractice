// localStorage = apne broser ke andar data store karna so jabhi tab ya browser band hoga data saved rahega 
/* 
1. store kaise kare             setItem("name of field","value of that field")
2. value fetch kaise kare       getItem("name of field")
3. value ko remove kaise kare   removeItem("name of field")
4. value ko update kaise kare   setItem("name of field","updated value") note: if field is not there it will create new if exist then updates its value 
5. values ko cleat kaise kare   clear()*/
localStorage.setItem("name", "Prithviraj Koparde") // type on console - localStorage  output - Storage {name: 'Prithviraj Koparde'}
let get = localStorage.getItem("name")            // type on console - localStorage.getItem("name") or get. output - 'Prithviraj Koparde'
let remove = localStorage.removeItem("name")      // type on console - LocalStorage or remove the name value from localStorage will already removed
localStorage.setItem("name", "Koparde")        //same as set items but it creates new field if doent exist but updates if exists already

/* NOTE: localStorage can only save string data in it if you pass Array, list, to it will save it as a string value

for ex:  localStorage.setItem("friend", ["A" ,"B" ,"C"])    <-- passing friend array to localStorage
        on typing localStorage on console it will show all these array values in the form of string data

        But we can pass array, list data to it by putting it into JSON.stringify()

for ex: localStorage.setItem("friend", JSON.stringify(["A", "B", "C"])) stores data in string 
        but we can retrieve this data into arrays using JSON.Parse(localStorage.getItem("friend")) this will give us array output */

localStorage.setItem("friend", ["A", "B", "C"])                   //friend: "A,B,C"
localStorage.setItem("family", JSON.stringify(["D", "E", "F"]))  //family: "[\"D\",\"E\",\"F\"]"
let fmoutput = JSON.parse(localStorage.getItem("family"))
console.log(fmoutput)                       // arrayy --> (3) ['D', 'E', 'F'] 0: "D" 1 : "E" 2:"F" length: 3
// sessionStorage = ye data ko temperoryily store karta hai jaise tab band huva data gayab
/* similar working as localstorage like its methods are also same setItem, getItem, removeItem
but it stores data untill that tab is not closed if closed data gayab 


 cookies - ye bhi data store karta hai and hamara data browser ke cookie naam ki property me save ho
          jata hai but ye light data ko store karne me use hota hai aur ye light weight bhi hai

          cookies around ~4kb data store kar sakti hai jahapar local and session storage stores aorund ~5mb of data */

/* when site get reload the saved data in cookie is sent to the backend server
how to set cookie 
1. on browser type document.cookie = "name=Prithvi" press ElementInternals
2. your cookie will be saved on browser 
3. you can view and delete these cookies using one extension called "editthiscookie" which is a chrome extension */


// creating a toggle theme button and control dark and light mode based on it

function darkOrLight() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) document.body.classList.add("dark")      // is your system is in dark or light mode true or false 

        else document.body.classList.add("light")
}

darkOrLight()

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function(){
        darkOrLight()
})