let screen = document.querySelector("#screen")
screen.value = ""
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");

buttons.forEach(function (buttons) {
    buttons.addEventListener("click", function (e) {
        if (screen.value.length >= 13) {
alert("Maximum limit reached")
        } else {
            screen.value += e.target.innerHTML
        }
    })
})

clear.addEventListener("click", function () {
    screen.value = ""
})

equal.addEventListener("click", function () {
    screen.value = eval(screen.value);
})