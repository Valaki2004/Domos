document.getElementById('egy').
textContent = 137 
document.querySelector('#ketto').
textContent = 248
const a = document.getElementsByClassName('.ketto')
document.querySelector("h1").style.color = "white"

// const b = document.getElementsByTagName('h2');
// b[1].textContent = 'kutya';

const s = document.querySelectorAll('h2');
for (let i=0;i<2;i++){
    s[i].textContent = 'alma';
    s[i].style.backgroundColor = 'navy';
    s[i].style.color = 'darkred';
    s[i].style.padding = "5px";
}
console.error("danger")
console.warn("wigyázz")
console.log("valami")
// console.clear()


s.forEach((elem) => {
    elem.style.borderRadius = '50px'
});


const M = document.querySelector('.GO')

M.addEventListener('click',() => {
    start();
});

function start(){
    alert("müködik")
}
const inputs = document.querySelectorAll("#valami")
const t = document.querySelector("#formButton")

t.addEventListener('click',() => {
    inputs.forEach(input => {
        console.log(input.value)
    })
})

const lista = document.querySelector(".lista")
const li1 = document.querySelector("li")
const li2 = document.querySelector("li")
li1.textContent = "valami más"
li2.textContent = "nemtom mi legyen"
lista.append(li1);
lista.appendChild(li2)

const nevlista = document.querySelector(".nevlista")
const nevek = ["Lajos","Béla","Attila"];

nevek.forEach((nev) => {
    const li = document.createElement("li");
    li.textContent = nev;
    nevlista.append(li)
})
