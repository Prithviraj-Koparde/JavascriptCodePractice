console.log("------------------- Objects ---------------------")

// syntax of creating object

let obj = {}        // this is a empty object

let obj1 = {        // you can also put values in it
    name: "Prithvi",    // key: value => key value structure
    age: 21
}

console.log(obj1.age)       // accessing objects data 

// nesting of objects

let obj3 = {
    name: "kampa",
    age: 2,
    address: {
        city: "nerul",
        district: "thane",
        location: {
            pincode: 400805,
            lng: "lng is here!"
        }
    }

}

// to access lng in obj3 

console.log(obj3.address.location.lng)

// upper process is too long if you want to acces lng repeateadly so use

let { pincode, lng } = obj3.address.location                     // here variables are created same as per named in obj3 and assigned its address to it 

console.log(pincode, lng)



// for-in 
// for in is used to access values or keys in obj using any named variable as key 

for (let key /* OR any name for key */ in obj3) {
    console.log(key, obj3[key])                     // obj3[key] :- this is done to access values of keys present in obj3 and "key" is used to access keys in obj3 
}

// to get only keys of obj3 you can use Object.keys(object name)
// OBject.keys returns a array of keys in an object
console.log(Object.keys(obj3))

// Object.entries :- gives a array of arrays with their length in it which is no. of keys in them

console.log(Object.entries(obj3))           // output :- (3) [Array(2), Array(2), Array(2)]


// Object spread                    // creates a object which takes objects in it

let obj4 = { price: Infinity, ...obj3 } // obj4 will be same as obj3   and here i have added new key value price to obj4 which adds up in it


// Deep Clone of object
// Spread technique fails to copy nested object in which there can be multiple objects present in this case it only copies the reference key not all values in it 
// this is why we use Deep Clone

let obj5 = JSON.parse(JSON.stringify(obj3)) // 1st the obj3 is converted into string then it is parsed then it is copied to obj5
console.log(obj5)


// Optional Chaning
// Optional chaining is a process checking whether a key is present in obj or not

let obj6 = {
    name: "Bdshah",
    age: 43,
    address: {
        pincode: 400566,
        area: "Navi Mumbai"
    }
}

console.log(onj6 ?.address)                  // it will tell me that whether a element is present in obj or not if not it will not throw error it will shoe undefined