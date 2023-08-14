let p = document.querySelector("p")
let add = document.querySelector(".add")
let sub = document.querySelector(".sub")
let multiply = document.querySelector(".multiply")
console.log(p)
add.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
})
sub.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML - 1;
})
multiply.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML * 2;
})