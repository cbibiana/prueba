// Etiquetas para letras y numeros
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");
// Botones
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");

// Funciones
const fnA1 = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else {
    if (numeros.innerHTML == "" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML = "1";
    }
  }
};
const fnB2 = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML += "B";
  } else {
    if (numeros.innerHTML == "1" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "2";
    } else {
      alert("paso incorrecto");
    }
  }
};
const fnC3 = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML += "C";
  } else {
    if (numeros.innerHTML == "12" && letras.innerHTML == "ABCDEFGHIJ") {
      numeros.innerHTML += "3";
    } else {
      alert("paso incorrecto");
    }
  }
};
const fnD4 = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML += "D";
  } else {
    alert("paso incorrecto");
  }
};
const fnE5 = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML += "E";
  } else {
    alert("paso incorrecto");
  }
};
const fnF6 = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML += "F";
  } else {
    alert("paso incorrecto");
  }
};
const fnG7 = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML += "G";
  } else {
    alert("paso incorrecto");
  }
};
const fnH8 = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML += "H";
  } else {
    alert("paso incorrecto");
  }
};
const fnI9 = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML += "I";
  } else {
    alert("paso incorrecto");
  }
};
const fnJ0 = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML += "J";
  } else {
    alert("paso incorrecto");
  }
};

// Eventos click
btnA1.onclick = () => {
  fnA1();
};
btnB2.onclick = () => {
  fnB2();
};
btnC3.onclick = () => {
  fnC3();
};
btnD4.onclick = () => {
  fnD4();
};
btnE5.onclick = () => {
  fnE5();
};
btnF6.onclick = () => {
  fnF6();
};
btnG7.onclick = () => {
  fnG7();
};
btnH8.onclick = () => {
  fnH8();
};
btnI9.onclick = () => {
  fnI9();
};
btnJ0.onclick = () => {
  fnJ0();
};
