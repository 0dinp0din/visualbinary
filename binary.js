'strict';

const output = document.getElementById("outputcontainer");
let total = 0;
let img;

function buttonclick(klasse, value, id) {
    let imgflip = Number(klasse);
    let bitvalue = Number(value);
    let button = document.getElementById(id)

    if (imgflip === 0){ img = 1; total += bitvalue} 
    else if(imgflip === 1){ img = 0; total -= bitvalue}

    button.className = img;
    button.src = `images/${img}.png`
    output.innerHTML = `<h1>Bitverdien over i desimaltall: ${total}</h1>`
}