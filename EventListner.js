// browser me koi bhi action hui to event raise ho jayega bhai 
// aur ye action ko agar reaction deni hai to inn actions ko handle karna ana chaiye
// in this scenario eventListener takes part jaha aap reaction de pate ho inn actions ko 

// addEventListner      - adds event reaction to action perform it takes two values name of action and function

let p = document.querySelector("p")
function dblclick() {
    p.style.color = "green"
    p.style.fontSize = "18px"
}

p.addEventListener("dblclick", dblclick)

// removeEventListener - it removes added eventlistner and it takes two values name of action and function

p.removeEventListener("dblclick", dblclick) // it will remove applied eventListener to p 


// input field

let inp = document.querySelector("input")

inp.addEventListener("input", function (elem) {
    // console.log(elem)                              // .data is a property in elem which can be printed on console on type by elem.data
    if (elem.data !== null) {                           // in case we dont want  to print spaces i.e null
        console.log(elem.data)
    }
})


let inp2 = document.querySelector("#second-input")

inp2.addEventListener("input", elem => {
    if (elem.data !== null) {
        console.log(elem.data)
    }
})

// change field             - its a event which fires when something takes changes in selection field

let sel = document.querySelector("#select-device")
let title = document.querySelector("#title")

sel.addEventListener("change", function (val) {
    title.textContent = `${val.target.value} Device Selected`
    console.log(val.target.value)
})



// to add user enter keys on window screen

let h1 = document.querySelector("#text-input h1")
window.addEventListener("keydown", function (val) {
    if (val.key === " ") {
        h1.textContent = "spc"
    }
    else {
        h1.textContent = val.key
    }
})

// upload file working button

let btn = document.querySelector("#btn")
let file = document.querySelector("#choose-file")

btn.addEventListener("click", () => {
    file.click()
})

file.addEventListener("change", (val) => {
    btn.textContent = val.target.files[0].name
    // console.log(val.target.files[0].name)
})