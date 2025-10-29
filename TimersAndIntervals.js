// timers and intervals 

// setTimeout - its is a functinon which needs one function in it and a time is set in mili seconds like 5000ms i.e 5s
// so it will print hello in 5 seconds

let tm = setTimeout(function () {
    // console.log("hello")        // hello will print in 5 seconds just one time 
}, 5000)         // time in mili seconds

// clearTimeout - it clears the setTimeout it will never appear

clearTimeout(tm)                // hello of tm will never print

// setInterval - its a function same as setTimeout which need one function in it which will run repeateadly for give time

setInterval(function () {
    // console.log("hi...")        // hi will print after every 5 seconds
}, 5000)

// clearInterval - same a clearTimeout but it works on intervals



// reverse count down from 10 to 0


let count = 10
let interval = setInterval(function () {

    if (count >= 0) {
        // console.log(count)
        count--;
    }
    else clearInterval(interval)
}, 1000)


// downloading downloaded box

let timer = document.querySelector("#timer")
let count1 = 10
let time = setInterval(function () {
    if (count1 >= 0) {
        timer.textContent = `${count1}`
        count1--
        if (count1 === -1) {
            timer.textContent = "boom!"
        }
    }
    else clearInterval(time)
}, 1000)


// ---------------------- download box--------------------

let dstatus = document.querySelector("#status")
let loader = document.querySelector("#loader")
let downloadPercentage = document.querySelector("#download-percentage")
let count2 = 0

let downloader = setInterval(function () {
    if (count2 <= 99) {
        count2++
        loader.style.width = `${count2}%`
        downloadPercentage.textContent = `${count2}%`
        dstatus.textContent = "Downloading...."
    }
    else {
        dstatus.textContent = "Downloaded."
        clearInterval(downloader)
    }
}, 30)


// ----------------------------- alert 3 second enter and exit---------------------------

let alert = document.querySelector(".alert")
let h1 = document.querySelector(".alert h1")
alert.style.display = "initial"
h1.style.display = "initial"

setTimeout(function () {
    alert.style.display = "none"
    h1.style.display = "none"
}, 3000)
