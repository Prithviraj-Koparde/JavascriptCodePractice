// localStorage = apne broser ke andar data store karna so jabhi tab ya browser band hoga data saved rahega 
/* 
1. store kaise kare             setItem("name of field","value of that field")
2. value fetch kaise kare       getItem("name of field")
3. value ko remove kaise kare   removeItem("name of field")
4. value ko update kaise kare   setItem("name of field","updated value") note: if field is not there it will create new if exist then updates its value 
5. values ko cleat kaise kare   clear()*/
localStorage.setItem("name","Prithviraj Koparde") // type on console - localStorage  output - Storage {name: 'Prithviraj Koparde'}
let get = localStorage.getItem("name")            // type on console - localStorage.getItem("name") or get. output - 'Prithviraj Koparde'
let remove = localStorage.removeItem("name")      // type on console - LocalStorage or remove the name value from localStorage will already removed
localStorage.setItem("name","Koparde")        //same as set items but it creates new field if doent exist but updates if exists already




// sessionStorage = ye data ko temperoryily store karta hai jaise tab band huva data gayab
/* similar working as localstorage like its methods are also same setItem, getItem, removeItem 
but it stores data untill that tab is not closed if closed data gayab */


// cookies - ye bhi data store karta hai and hamara data browser ke cookie naam ki property me save ho 
//           jata hai but ye light data ko store karne me use hota hai aur ye light weight bhi hai