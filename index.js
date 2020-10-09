const warnaP = document.getElementById('a');
const warna = warnaP.querySelector("p");
warna.style.color = "blue";

const apa = document.getElementById('a');
const apaa = apa.querySelectorAll("p");

for(let i = 0; i <= apaa.length; i++){
    apaa[i].style.backgroundColor ="red";
}
