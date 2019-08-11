let inputNazivZadatka = document.querySelector("#nazivZadatka");
let btnDodajZadatak = document.querySelector("#dodajZadatak");
let divToDoZadaci = document.querySelector("#toDoZadaci");
let divReseniZadaci = document.querySelector("#reseniZadaci");

function obavljenZadatak(element) {
    const nazivZadatka = element.value;
    divReseniZadaci.innerHTML += `<p>${nazivZadatka}</p>`;
    let roditelj = element.parentNode;
    roditelj.innerHTML = "";
    roditelj.outerHTML = "";
    delete roditelj;
}

btnDodajZadatak.onclick = function(){
    const nazivZadatka = inputNazivZadatka.value;
    divToDoZadaci.innerHTML += `<div><input type="checkbox" onclick="obavljenZadatak(this)" 
                                    value="${nazivZadatka}"> ${nazivZadatka}</div>`;
}