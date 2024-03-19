document.getElementById('egy').
textContent = 137 
document.querySelector('#ketto').
textContent = 248
const a = document.getElementsByClassName('ketto')
document.querySelector("h1").style.color = "white"


// const b = document.getElementsByTagName('h2');
// b[1].textContent = 'kutya';

const s = document.querySelectorAll('h2');
for (let i=0;i<2;i++){
    s[i].textContent = 'alma';
    s[i].style.backgroundColor = 'navy';
    s[i].style.color = 'darkred';
}
console.error("danger")
console.warn("wigyázz")
console.log("valami")