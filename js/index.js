let bacbody = document.getElementsByClassName("smaldiv");
let heder = document.getElementsByClassName("ghed");
let but = document.getElementById("but");
let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let secconta = document.getElementById("secconta");

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "f"];

function genrat() {
  for (let i = 0; i < bacbody.length; i++) {
    let x = arr[Math.round(Math.random() * (arr.length - 1))];
    let x1 = arr[Math.round(Math.random() * (arr.length - 1))];

    let y = arr[Math.round(Math.random() * (arr.length - 1))];
    let y1 = arr[Math.round(Math.random() * (arr.length - 1))];

    let c = arr[Math.round(Math.random() * (arr.length - 1))];
    let c1 = arr[Math.round(Math.random() * (arr.length - 1))];

    let qw = `#${x}${x1}${y}${y1}${c}${c1}`;

    bacbody[i].style.backgroundColor = qw;
    heder[i].innerHTML = qw;
  }
}

but.addEventListener("click", () => {
  genrat();
});

but1.addEventListener("click", () => {
  let newelh1 = document.createElement("h1");
  newelh1.classList.add("ghed");
  let newelh1texnod = document.createTextNode("CodeNumber");

  let newel = document.createElement("div");
  newel.classList.add("smaldiv");

  newelh1.appendChild(newelh1texnod);
  newel.appendChild(newelh1);
  secconta.appendChild(newel);
});

but2.addEventListener("click", () => {
  let newelh1 = document.createElement("h1");
  newelh1.classList.add("ghed");
  let newelh1texnod = document.createTextNode("CodeNumber");

  let newel = document.createElement("div");
  newel.classList.add("smaldiv");

  newelh1.appendChild(newelh1texnod);
  newel.appendChild(newelh1);
  secconta.appendChild(newel);

  genrat();
});
