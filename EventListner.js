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

function firstUpload() {
    let btn = document.querySelector("#btn")
    let file = document.querySelector("#choose-file")

    btn.addEventListener("click", () => {
        file.click()
    })

    file.addEventListener("change", (val) => {
        btn.textContent = val.target.files[0].name
        // console.log(val.target.files[0].name)
    })
}
// firstUpload()

// second upload button

function secondUpload() {
    let btn2 = document.querySelector("#btn-2")
    let choose2 = document.querySelector("#choose-file-2")

    btn2.addEventListener("click", () => {
        choose2.click()
    })

    choose2.addEventListener("change", (val) => {
        let file = val.target.files[0]
        // console.log(val.target.files[0].name)
        if (file) {
            btn2.textContent = file.name
        }
    })
}
// secondUpload()

// making a submit form on submit displays a card

function firstForm() {
    let form = document.querySelector("#form")
    let input = document.querySelectorAll("#form input")        // to select all input tags in form
    let main = document.querySelector("#form-div")

    form.addEventListener("submit", val => {
        val.preventDefault()                // this is done to stop refresh of page when submit is clicked
        // console.log(input)
        // console.log(input[0].value, input[1].value, input[2].value, input[3].value)

        let card = document.createElement("div")
        card.classList.add("card")

        let profile = document.createElement("div")
        profile.classList.add("profile")

        let img = document.createElement("img")
        img.setAttribute("src", input[0].value)

        let h1 = document.createElement("h1")
        h1.textContent = input[1].value

        let h2 = document.createElement("h2")
        h2.textContent = input[2].value

        let p = document.createElement("p")
        p.textContent = input[3].value

        profile.appendChild(img)
        card.appendChild(profile)
        card.appendChild(h1)
        card.appendChild(h2)
        card.appendChild(p)

        main.appendChild(card)

        input.forEach(inp => {              // clearing the form after each submit
            if (inp.type !== "submit") {      // inp ka type "submit" nahi hona chaiye agar nahi hai to if loop chalao
                inp.value = ""              // inp.value is set to "" that means blank
            }

        })
    })
}
// firstForm()

// making another submit form which displays cards

function secondForm() {
    let form2 = document.querySelector("#form-2")
    let inputs = document.querySelectorAll("#form-2 input")
    let formMain = document.querySelector(".form-div-2")

    form2.addEventListener("submit", val => {
        val.preventDefault()

        // console.log(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value)

        let card2 = document.createElement("div")
        card2.classList.add("card-2")

        let profile2 = document.createElement("div")
        profile2.classList.add("profile-2")

        let img2 = document.createElement("img")
        img2.setAttribute("src", inputs[0].value)

        let name = document.createElement("h1")
        name.textContent = inputs[1].value

        let occupation = document.createElement("h2")
        occupation.textContent = inputs[2].value

        let email = document.createElement("h3")
        email.textContent = inputs[3].value

        let number = document.createElement("h3")
        number.textContent = inputs[4].value

        let p = document.createElement("p")
        p.textContent = inputs[5].value

        profile2.appendChild(img2)
        card2.appendChild(profile2)
        card2.appendChild(name)
        card2.appendChild(occupation)
        card2.appendChild(email)
        card2.appendChild(number)
        card2.appendChild(p)

        formMain.appendChild(card2)
    })
}
// secondForm()


// ----------------------------------------------------------

// mouseover and mouseleave

let square = document.querySelector("#square")

// mouseenter or mouseover
square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "green"
})


// mouseleave or mouseout
square.addEventListener("mouseleave", () => {
    square.style.backgroundColor = "red"
})


// --------------------- Bubbling -----------------------

// **Event bubbling - jabh koi element pe eventlistner nahi laga hota to vo apne 
//  parent element pe eventlistner dhundta hai agar parent pe bhi nai hoga 
//  to vo html pe dhundta hai aur nai mila to koi event perform nahi hota
// AND
// agar element pe evenetlistner hoga tabhi bhi vo parent pe jump karega aur uska
// eventlistner bhi perform hoga and then jump on its parent element

let ul = document.querySelector("#ul-div ul")

ul.addEventListener("click", val => {
    // val.target.style.textDecoration = "line-through"
    val.target.classList.toggle("line-through")         // two way animation of line through with toggle
})


// ------------------- Event Capturing----------------------

// Event capturing - yaha event jumps from parent element to clicked child element but unlike bubbling we have to 
// mannually enable event capturing by simply write ",true" after function
// watch 3:55:00 of sheryian school js part 2 for better understanding


// example of capturing

// ul.addEventListener("click",val=>{
//     // val.target.style.textDecoration = "line-through"
//     val.target.classList.toggle("line-through")         // two way animation of line through with toggle
// },true)


// ----------------------- character left counter ----------------------

let inp4 = document.querySelector(".character-counter input")
let span = document.querySelector("span")
inp4.addEventListener("input", () => {
    // console.log(inp4.value.length)
    let left = 20 - inp4.value.length
    span.textContent = left
    if (left < 0) {
        span.style.color = "red"
    }
    else {
        span.style.color = "white"
    }
})