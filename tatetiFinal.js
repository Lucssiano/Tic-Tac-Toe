// ### VARIABLES ###
const title = document.getElementById("title");

// Número random
let randNum;
// Obtiene el tablero del tateti
let elems = document.getElementsByClassName("celda");
// Array donde están los jugadores
let jugadores = ["LA MAQUINA", "EL HUMANO"];
// Aquí se guarda el jugador elegido aleatoriamente
let jugadorFinal = "";
// Array para la habilitación del juego
let habilitacion = ["H"];
<<<<<<< HEAD
// Variable que indica que el juego está habilitado
=======
// Variable que indica que el juego está habilitado para jugarse
>>>>>>> develop
let habilitado = "";
// Letras del tateti
let letras = ["x", "o"];
// Letra elegida por el jugador
let letra = [];
// Turnos
let turno;
// Espacios del tateti
<<<<<<< HEAD
let IDS = [
  "ceroCero",
  "ceroUno",
  "ceroDos",
  "unoCero",
  "unoUno",
  "unoDos",
  "dosCero",
  "dosUno",
  "dosDos",
];
=======
let IDS = ["ceroCero", "ceroUno", "ceroDos", "unoCero", "unoUno", "unoDos", "dosCero", "dosUno", "dosDos"];
>>>>>>> develop
// Espacios del tateti usados
let IDS2 = [];
// Posicion en la que cae la ficha de la máquina
let posicionmaq = [];
// Contador de partidas ganadas por el humano
let contadorh = 0;
// Contador de partidas ganadas por la máquina
let contadorc = 0;
// Contador de partidas empatadas
let empates = 0;
// Las siguientes 8 variables cuando valen 1 indican que la máquina o el usuario escribio en dicha posición
let ocupadac0 = 0;
let ocupadac1 = 0;
let ocupadac2 = 0;
let ocupadac3 = 0;
let ocupadac4 = 0;
let ocupadac5 = 0;
let ocupadac6 = 0;
let ocupadac7 = 0;
let ocupadac8 = 0;
<<<<<<< HEAD
=======
// Habilitación para los timeOut para ganar , perder o empatar
let x = 0;
>>>>>>> develop

// ### FUNCIONES ###

// Funcion para que comience el juego
function inicio() {
  for (let i = 0; i < elems.length; i++) {
    elems[i].style.display = "inline-block";
  }
  document.getElementById("paginaant").style.visibility = "hidden";
  randNum = Math.floor(Math.random() * jugadores.length);
  console.log(randNum + "  numero random");
  jugadorFinal = jugadores[randNum];
  console.log(jugadorFinal + "  jugador final");
  alert("Comienza jugando:  " + jugadorFinal);
  habilitado = habilitacion;
}

// Función para los turnos
function juego() {
  if (jugadorFinal === jugadores[0] && letra === letras[0]) {
    console.log(letra);
    turno = 0;
    console.log(turno + "  turno");
    maquinaO();
  } else if (jugadorFinal === jugadores[0] && letra === letras[1]) {
    turno = 0;
    console.log(turno + "  turno");
    maquinaX();
  } else if (jugadorFinal === jugadores[1]) {
    turno = 1;
    console.log(turno + "  turno");
  } else {
    alert("Presione el boton de iniciar el juego");
  }
}

// La máquina escribe al azar con O
function maquinaO() {
<<<<<<< HEAD
  posicionmaq = IDS[Math.floor(Math.random() * IDS.length)];
  verificarGanador();
  if (IDS2.includes(posicionmaq)) {
    maquinaO();
  } else {
    if (posicionmaq === "ceroCero") {
      document.getElementById("ceroCero").textContent = "O";
      ocupadac0 = 1;
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "ceroUno") {
      ocupadac1 = 1;
      document.getElementById("ceroUno").textContent = "O";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "ceroDos") {
      ocupadac2 = 1;
      document.getElementById("ceroDos").textContent = "O";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "unoCero") {
      ocupadac3 = 1;
      document.getElementById("unoCero").textContent = "O";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "unoUno") {
      ocupadac4 = 1;
      document.getElementById("unoUno").textContent = "O";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "unoDos") {
      ocupadac5 = 1;
      document.getElementById("unoDos").textContent = "O";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "dosCero") {
      ocupadac6 = 1;
      document.getElementById("dosCero").textContent = "O";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "dosUno") {
      ocupadac7 = 1;
      document.getElementById("dosUno").textContent = "O";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "dosDos") {
      ocupadac8 = 1;
      document.getElementById("dosDos").textContent = "O";
      IDS2.push(posicionmaq);
      turno = 1;
=======
  if (turno === 0) {
    verificarGanador();
    posicionmaq = IDS[Math.floor(Math.random() * IDS.length)];
    // verificarGanador();
    if (IDS2.includes(posicionmaq)) {
      maquinaO();
    } else {
      // verificarGanador();
      if (posicionmaq === "ceroCero") {
        document.getElementById("ceroCero").textContent = "O";
        ocupadac0 = 1;
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "ceroUno") {
        ocupadac1 = 1;
        document.getElementById("ceroUno").textContent = "O";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "ceroDos") {
        ocupadac2 = 1;
        document.getElementById("ceroDos").textContent = "O";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "unoCero") {
        ocupadac3 = 1;
        document.getElementById("unoCero").textContent = "O";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "unoUno") {
        ocupadac4 = 1;
        document.getElementById("unoUno").textContent = "O";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "unoDos") {
        ocupadac5 = 1;
        document.getElementById("unoDos").textContent = "O";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "dosCero") {
        ocupadac6 = 1;
        document.getElementById("dosCero").textContent = "O";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "dosUno") {
        ocupadac7 = 1;
        document.getElementById("dosUno").textContent = "O";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "dosDos") {
        ocupadac8 = 1;
        document.getElementById("dosDos").textContent = "O";
        IDS2.push(posicionmaq);
        turno = 1;
      }
>>>>>>> develop
    }
    // verificarGanador();
  }
}

// La máquina escribe al azar con X
function maquinaX() {
<<<<<<< HEAD
  posicionmaq = IDS[Math.floor(Math.random() * IDS.length)];
  verificarGanador();
  if (IDS2.includes(posicionmaq)) {
    maquinaX();
  } else {
    if (posicionmaq === "ceroCero") {
      document.getElementById("ceroCero").textContent = "X";
      ocupadac0 = 1;
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "ceroUno") {
      ocupadac1 = 1;
      document.getElementById("ceroUno").textContent = "X";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "ceroDos") {
      ocupadac2 = 1;
      document.getElementById("ceroDos").textContent = "X";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "unoCero") {
      ocupadac3 = 1;
      document.getElementById("unoCero").textContent = "X";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "unoUno") {
      ocupadac4 = 1;
      document.getElementById("unoUno").textContent = "X";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "unoDos") {
      ocupadac5 = 1;
      document.getElementById("unoDos").textContent = "X";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "dosCero") {
      ocupadac6 = 1;
      document.getElementById("dosCero").textContent = "X";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "dosUno") {
      ocupadac7 = 1;
      document.getElementById("dosUno").textContent = "X";
      IDS2.push(posicionmaq);
      turno = 1;
    }

    if (posicionmaq === "dosDos") {
      ocupadac8 = 1;
      document.getElementById("dosDos").textContent = "X";
      IDS2.push(posicionmaq);
      turno = 1;
=======
  if (turno === 0) {
    verificarGanador();
    posicionmaq = IDS[Math.floor(Math.random() * IDS.length)];
    // verificarGanador();
    if (IDS2.includes(posicionmaq)) {
      maquinaX();
    } else {
      // verificarGanador();
      if (posicionmaq === "ceroCero") {
        document.getElementById("ceroCero").textContent = "X";
        ocupadac0 = 1;
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "ceroUno") {
        ocupadac1 = 1;
        document.getElementById("ceroUno").textContent = "X";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "ceroDos") {
        ocupadac2 = 1;
        document.getElementById("ceroDos").textContent = "X";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "unoCero") {
        ocupadac3 = 1;
        document.getElementById("unoCero").textContent = "X";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "unoUno") {
        ocupadac4 = 1;
        document.getElementById("unoUno").textContent = "X";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "unoDos") {
        ocupadac5 = 1;
        document.getElementById("unoDos").textContent = "X";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "dosCero") {
        ocupadac6 = 1;
        document.getElementById("dosCero").textContent = "X";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "dosUno") {
        ocupadac7 = 1;
        document.getElementById("dosUno").textContent = "X";
        IDS2.push(posicionmaq);
        turno = 1;
      }

      if (posicionmaq === "dosDos") {
        ocupadac8 = 1;
        document.getElementById("dosDos").textContent = "X";
        IDS2.push(posicionmaq);
        turno = 1;
      }
>>>>>>> develop
    }
    // verificarGanador();
  }
}

// Primera casilla que apreta el usuario
function jugadaHumano0() {
  if (ocupadac0 === 0 && turno === 1 && letra === letras[1]) {
    document.getElementById("ceroCero").textContent = "O";
    IDS2.push("ceroCero");
    turno = 0;
    ocupadoc0 = 1;
    maquinaX();
  } else if (ocupadac0 === 0 && turno === 1 && letra === letras[0]) {
    document.getElementById("ceroCero").textContent = "X";
    IDS2.push("ceroCero");
    turno = 0;
    ocupadac0 = 1;
    maquinaO();
  }
}

// Segunda casilla que apreta el usuario
function jugadaHumano1() {
  if (ocupadac1 === 0 && turno === 1 && letra === letras[1]) {
    document.getElementById("ceroUno").textContent = "O";
    IDS2.push("ceroUno");
    turno = 0;
    ocupadac1 = 1;
    maquinaX();
  } else if (ocupadac1 === 0 && turno === 1 && letra === letras[0]) {
    document.getElementById("ceroUno").textContent = "X";
    IDS2.push("ceroUno");
    turno = 0;
    ocupadac1 = 1;
    maquinaO();
  }
}

// Tercera casilla que apreta el usuario
function jugadaHumano2() {
  if (ocupadac2 === 0 && turno === 1 && letra === letras[1]) {
    document.getElementById("ceroDos").textContent = "O";
    IDS2.push("ceroDos");
    turno = 0;
    ocupadac2 = 1;
    maquinaX();
  } else if (ocupadac2 === 0 && turno === 1 && letra === letras[0]) {
    document.getElementById("ceroDos").textContent = "X";
    IDS2.push("ceroDos");
    turno = 0;
    ocupadac2 = 1;
    maquinaO();
  }
}

// Cuarta casilla que apreta el usuario
function jugadaHumano3() {
  if (ocupadac3 === 0 && turno === 1 && letra === letras[1]) {
    document.getElementById("unoCero").textContent = "O";
    IDS2.push("unoCero");
    turno = 0;
    ocupadac3 = 1;
    maquinaX();
  } else if (ocupadac3 === 0 && turno === 1 && letra === letras[0]) {
    document.getElementById("unoCero").textContent = "X";
    IDS2.push("unoCero");
    turno = 0;
    ocupadac3 = 1;
    maquinaO();
  }
}

// Quinta casilla que apreta el usuario
function jugadaHumano4() {
  if (ocupadac4 === 0 && turno === 1 && letra === letras[1]) {
    document.getElementById("unoUno").textContent = "O";
    IDS2.push("unoUno");
    turno = 0;
    ocupadac4 = 1;
    maquinaX();
  } else if (ocupadac4 === 0 && turno === 1 && letra === letras[0]) {
    document.getElementById("unoUno").textContent = "X";
    IDS2.push("unoUno");
    turno = 0;
    ocupadac4 = 1;
    maquinaO();
  }
}

// Sexta casilla que apreta el usuario
function jugadaHumano5() {
  if (ocupadac5 === 0 && turno === 1 && letra === letras[1]) {
    document.getElementById("unoDos").textContent = "O";
    IDS2.push("unoDos");
    turno = 0;
    ocupadac5 = 1;
    maquinaX();
  } else if (ocupadac5 === 0 && turno === 1 && letra === letras[0]) {
    document.getElementById("unoDos").textContent = "X";
    IDS2.push("unoDos");
    turno = 0;
    ocupadac5 = 1;
    maquinaO();
  }
}

// Septima casilla que apreta el usuario
function jugadaHumano6() {
  if (ocupadac6 === 0 && turno === 1 && letra === letras[1]) {
    document.getElementById("dosCero").textContent = "O";
    IDS2.push("dosCero");
    turno = 0;
    ocupadac6 = 1;
    maquinaX();
  } else if (ocupadac6 === 0 && turno === 1 && letra === letras[0]) {
    document.getElementById("dosCero").textContent = "X";
    IDS2.push("dosCero");
    turno = 0;
    ocupadac6 = 1;
    maquinaO();
  }
}

// Octava casilla que apreta el usuario
function jugadaHumano7() {
  if (ocupadac7 === 0 && turno === 1 && letra === letras[1]) {
    document.getElementById("dosUno").textContent = "O";
    IDS2.push("dosUno");
    turno = 0;
    ocupadac7 = 1;
    maquinaX();
  } else if (ocupadac7 === 0 && turno === 1 && letra === letras[0]) {
    document.getElementById("dosUno").textContent = "X";
    IDS2.push("dosUno");
    turno = 0;
    ocupadac7 = 1;
    maquinaO();
  }
}

// Novena casilla que apreta el usuario
function jugadaHumano8() {
  if (ocupadac8 === 0 && turno === 1 && letra === letras[1]) {
    document.getElementById("dosDos").textContent = "O";
    IDS2.push("dosDos");
    turno = 0;
    ocupadac8 = 1;
    maquinaX();
  } else if (ocupadac8 === 0 && turno === 1 && letra === letras[0]) {
    document.getElementById("dosDos").textContent = "X";
    IDS2.push("dosDos");
    turno = 0;
    ocupadac8 = 1;
    maquinaO();
  }
}

// Verifica si alguien ganó
function verificarGanador() {
  let b1 = document.getElementById("ceroCero").textContent;
  let b2 = document.getElementById("ceroUno").textContent;
  let b3 = document.getElementById("ceroDos").textContent;
  let b4 = document.getElementById("unoCero").textContent;
  let b5 = document.getElementById("unoUno").textContent;
  let b6 = document.getElementById("unoDos").textContent;
  let b7 = document.getElementById("dosCero").textContent;
  let b8 = document.getElementById("dosUno").textContent;
  let b9 = document.getElementById("dosDos").textContent;

  if (b1 == "X" && b2 == "X" && b3 == "X") {
<<<<<<< HEAD
    alert("Gano la X");
    contador();
    limpiar();
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    alert("Gano la X");
    contador();
    limpiar();
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    alert("Gano la X");
    contador();
    limpiar();
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    alert("Gano la X");
    contador();
    limpiar();
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    alert("Gano la X");
    contador();
    limpiar();
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    alert("Gano la X");
    contador();
    limpiar();
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    alert("Gano la X");
    contador();
    limpiar();
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    alert("Gano la X");
    contador();
    limpiar();
  } else if (b1 == "O" && b2 == "O" && b3 == "O") {
    alert("Gano el O");
    contador2();
    limpiar();
  } else if (b4 == "O" && b5 == "O" && b6 == "O") {
    alert("Gano el O");
    contador2();
    limpiar();
  } else if (b7 == "O" && b8 == "O" && b9 == "O") {
    alert("Gano el O");
    contador2();
    limpiar();
  } else if (b1 == "O" && b4 == "O" && b7 == "O") {
    alert("Gano el O");
    contador2();
    limpiar();
  } else if (b2 == "O" && b5 == "O" && b8 == "O") {
    alert("Gano el O");
    contador2();
    limpiar();
  } else if (b3 == "O" && b6 == "O" && b9 == "O") {
    alert("Gano el O");
    contador2();
    limpiar();
  } else if (b1 == "O" && b5 == "O" && b9 == "O") {
    alert("Gano el O");
    contador2();
    limpiar();
=======
    ganadorX();
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    ganadorX();
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    ganadorX();
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    ganadorX();
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    ganadorX();
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    ganadorX();
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    ganadorX();
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    ganadorX();
  } else if (b1 == "O" && b2 == "O" && b3 == "O") {
    ganadorO();
  } else if (b4 == "O" && b5 == "O" && b6 == "O") {
    ganadorO();
  } else if (b7 == "O" && b8 == "O" && b9 == "O") {
    ganadorO();
  } else if (b1 == "O" && b4 == "O" && b7 == "O") {
    ganadorO();
  } else if (b2 == "O" && b5 == "O" && b8 == "O") {
    ganadorO();
  } else if (b3 == "O" && b6 == "O" && b9 == "O") {
    ganadorO();
  } else if (b1 == "O" && b5 == "O" && b9 == "O") {
    ganadorO();
>>>>>>> develop
  } else if (b3 == "O" && b5 == "O" && b7 == "O") {
    ganadorO();
  } else if (
    b1 !== "" &&
    b2 !== "" &&
    b3 !== "" &&
    b3 !== "" &&
    b4 !== "" &&
    b5 !== "" &&
    b6 !== "" &&
    b7 !== "" &&
    b8 !== "" &&
    b9 !== ""
  ) {
<<<<<<< HEAD
    alert("Empate");
    empates++;
    document.getElementById("empate").innerHTML = empates;
    limpiar();
=======
    // Se le asigna el valor de 2 al turno para que la función de la máquina no se ejecute
    turno = 2;
    console.log(turno, "Empate");
    if (x === 0) {
      empates++;
      console.log(empates + "  contador empates");
      document.getElementById("empate").innerHTML = empates;
      setTimeout(function () {
        alert("Empate");
        limpiar();
      }, 100);
      x = 1;
    }
>>>>>>> develop
  }
}

// "Resetea" el juego
function limpiar() {
  b1 = document.getElementById("ceroCero").textContent = "";
  b2 = document.getElementById("ceroUno").textContent = "";
  b3 = document.getElementById("ceroDos").textContent = "";
  b4 = document.getElementById("unoCero").textContent = "";
  b5 = document.getElementById("unoUno").textContent = "";
  b6 = document.getElementById("unoDos").textContent = "";
  b7 = document.getElementById("dosCero").textContent = "";
  b8 = document.getElementById("dosUno").textContent = "";
  b9 = document.getElementById("dosDos").textContent = "";
  IDS2 = [];
  letra = [];
  posicionmaq = [];
  turno;
  console.log(turno, "limpiar");
  habilitacion = ["H"];
  habilitado = "";
  ocupadac0 = 0;
  ocupadac1 = 0;
  ocupadac2 = 0;
  ocupadac3 = 0;
  ocupadac4 = 0;
  ocupadac5 = 0;
  ocupadac6 = 0;
  ocupadac7 = 0;
  ocupadac8 = 0;
  document.getElementById("paginaant").style.visibility = "visible";
  document.getElementById("letraelec").style.visibility = "visible";
  document.getElementById("cambio").innerHTML = "Elija una letra";
  document.getElementById("fichah").innerHTML = "";
  document.getElementById("ficham").innerHTML = "";
  x = 0;
}

// Contador cuando el ganador es la "X"
function contador() {
  if (letra === "x") {
    contadorh++;
  } else if (letra === "o") {
    contadorc++;
    console.log(contadorc + "  contador c");
  }
  document.getElementById("Humano").innerHTML = contadorh;
  document.getElementById("Computadora").innerHTML = contadorc;
}

// Contador cuando el ganador es la "O"
function contador2() {
  if (letra === "o") {
    contadorh++;
<<<<<<< HEAD
  } else if (letra === "x") {
=======
    console.log(contadorh + "  contador h");
  } else if (letra == "x") {
>>>>>>> develop
    contadorc++;
    console.log(contadorc + "  contador c");
  }
  document.getElementById("Humano").innerHTML = contadorh;
  document.getElementById("Computadora").innerHTML = contadorc;
}

// Hace desaparecer los botones de X y O, y muestra que eligío la ficha X
function desaparecerX() {
  if (habilitado === habilitacion) {
    document.getElementById("cambio").innerHTML = "Eligió la ficha 'X' ";
    document.getElementById("letraelec").style.visibility = "hidden";
    document.getElementById("fichah").innerHTML = "X";
    document.getElementById("ficham").innerHTML = "O";
    letra = letras[0];
    console.log(letra + "  LETRA X");
    console.log(habilitado + "  habilitado X");
    juego();
  } else {
    alert(
      "Antes de elegir una letra debe apretar el boton de comenzar a jugar"
    );
  }
}

// Hace desaparecer los botones de X y O, y muestra que eligío la ficha O
function desaparecerO() {
  if (habilitado === habilitacion) {
    document.getElementById("cambio").innerHTML = "Eligió la ficha 'O' ";
    document.getElementById("letraelec").style.visibility = "hidden";
    document.getElementById("fichah").innerHTML = "O";
    document.getElementById("ficham").innerHTML = "X";
    letra = letras[1];
    console.log(letra + "  LETRA O");
    console.log(habilitado + "  habilitado O");
    juego();
  } else {
    alert(
      "Antes de elegir una letra debe apretar el boton de comenzar a jugar"
    );
  }
}
<<<<<<< HEAD
=======

// Funcion para el Timeout cuando gana la O
function ganadorO() {
  // Se le asigna el valor de 2 al turno para que la función de la máquina no se ejecute
  turno = 2;
  console.log(turno, "ganador O");
  if (x === 0) {
    setTimeout(function () {
      contador2();
      limpiar();
      alert("Ganó el O");
    }, 100);
    x = 1;
  }
}

// Funcion para el Timeout cuando gana la X
function ganadorX() {
  // Se le asigna el valor de 2 al turno para que la función de la máquina no se ejecute
  turno = 2;
  console.log(turno, "ganador X");
  if (x === 0) {
    setTimeout(function () {
      contador();
      limpiar();
      alert("Ganó la X");
    }, 100);
    x = 1;
  }
}

// Cuando el usuario gana con X y con O , o si empata entra dos veces a la función , pero el juego funciona correctamente
// Ver como se podría solucionar eso
>>>>>>> develop
