const kuyy = document.getElementById('kuy');
kuyy.innerHTML = "hai ini dibuat dengan DOM Selection Javascript";
kuyy.style.color="blue";

const warnaP = document.getElementById('a');
const warna = warnaP.querySelector("p");
warna.style.color = "blue";

const apa = document.getElementsByTagName('p');
apa[0].style.backgroundColor="red";
apa[1].style.backgroundColor="green";

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';



