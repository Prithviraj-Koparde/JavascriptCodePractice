let form1 = document.querySelector(".form-1")
let nm = document.querySelector("#name")

form1.addEventListener("submit", val => {
    val.preventDefault()
    if (nm.value.length <= 2) {
        let hide = document.querySelector("#hide")
        hide.style.display = "initial"
    }
    else {
        hide.style.display = "none"
    }

    // we can create regex code for username and other fields also put is inside / /
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let test = regex.test("h@h.h") // return false on h@h.h and test() is a function to test input
    console.log(test)

})


let form2 = document.querySelector(".form-2")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

form2.addEventListener("submit", function (val) {
    val.preventDefault()


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    let emailAns = emailRegex.test(email.value)
    let passAns = passRegex.test(password.value)
    let isValid = true

    if (!emailAns) {
        document.querySelector("#emailerror").style.display = "initial"
        document.querySelector("#resultmsg").style.display = "none"
        isValid = false
    }

    if (!passAns) {
        document.querySelector("#passerror").style.display = "initial"
        document.querySelector("#resultmsg").style.display = "none"
        isValid = false
    }

    if (isValid) {
        let endmsg = document.querySelector("#resultmsg")
        endmsg.style.display = "initial"
        endmsg.textContent = "everything is correct hurry!"
        document.querySelector("#emailerror").style.display = "none"
        document.querySelector("#passerror").style.display = "none"
    }
})

