let p = document.querySelector("#p")
let add = document.querySelector(".add")
let sub = document.querySelector(".sub")
let reset = document.querySelector(".reset")
let save = document.querySelector(".save")
let total = document.querySelector("#total")
console.log(p)
add.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
})
sub.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML - 1;
})


reset.addEventListener("click", function () {
    p.innerHTML = 0
    total.innerHTML = 0
})
save.addEventListener("click", function () {
    if (p.innerHTML == 0) {
        save.classlist.add("disable")
        alert("notsave 0!!!")
    }
    else if (p.innerHTML != 0) {
        if (total.innerHTML == 0) {
            total.innerHTML = p.innerHTML
        }
        else if (total.innerHTML != 0) {
            total.innerHTML += "," + p.innerHTML
        }
    }
    p.innerHTML = 0
})

