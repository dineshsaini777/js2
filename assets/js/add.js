let p = document.querySelector("p")
let button = document.querySelector("button")
console.log(p)
button.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
})
