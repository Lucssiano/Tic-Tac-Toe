// ### VARIABLES ###

// Número random
var randNum;
// Obtiene el tablero del tateti
var elems = document.getElementsByClassName("celda");
// Array donde están los jugadores
var jugadores = ["LA MAQUINA", "EL HUMANO"];
// Aquí se guarda el jugador elegido aleatoriamente
var jugadorFinal = "";
// Array para la habilitación del juego
var habilitacion = ["H"];
// Variable que indica que el juego está habilitado
var habilitado = "";
// Letras del tateti
var letras = ["x", "o"];
// Letra elegida por el jugador
var letra = [];
// Turnos
var turno;
// Espacios del tateti
var IDS = ["ceroCero", "ceroUno", "ceroDos", "unoCero", "unoUno", "unoDos", "dosCero", "dosUno", "dosDos"];
// Espacios del tateti usados
var IDS2 = [];
// Posicion en la que cae la ficha de la máquina
var posicionmaq = [];
// Contador de partidas ganadas por el humano
var contadorh = 0;
// Contador de partidas ganadas por la máquina
var contadorc = 0;
// Contador de partidas empatadas
var empates = 0;
// Las siguientes 8 variables cuando valen 1 indican que la máquina o el usuario escribio en dicha posición
var ocupadac0 = 0;
var ocupadac1 = 0;
var ocupadac2 = 0;
var ocupadac3 = 0;
var ocupadac4 = 0;
var ocupadac5 = 0;
var ocupadac6 = 0;
var ocupadac7 = 0;
var ocupadac8 = 0;
// Variable que verifica que alguien ganó
let ganador = 0;

// ### FUNCIONES ###

// Funcion para que comience el juego
function inicio() {
  for (var i = 0; i < elems.length; i++) {
    elems[i].style.display = "inline-block";
  }
  document.getElementById("paginaant").style.visibility = "hidden";
  randNum = Math.floor(Math.random() * jugadores.length);
  jugadorFinal = jugadores[randNum];
  alert("Comienza jugando:  " + jugadorFinal);
  habilitado = habilitacion;
}

// Función para los turnos
function juego() {
  if (jugadorFinal === jugadores[0] && letra === letras[0]) {
    turno = 0;
    maquinaO();
  } else if (jugadorFinal === jugadores[0] && letra === letras[1]) {
    turno = 0;
    maquinaX();
  } else if (jugadorFinal === jugadores[1]) {
    turno = 1;
  } else {
    alert("Presione el boton de iniciar el juego");
  }
}

// La máquina escribe al azar con O
function maquinaO() {
  posicionmaq = IDS[Math.floor(Math.random() * IDS.length)];
  // verificarGanador();
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
    }
  }
  verificarGanador();
}

// La máquina escribe al azar con X
function maquinaX() {
  posicionmaq = IDS[Math.floor(Math.random() * IDS.length)];
  // verificarGanador();
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
    }
  }
  verificarGanador();
}

// Primera casilla que apreta el usuario
function jugadaHumano0() {
  if (ocupadac0 === 0 && turno === 1 && letra === letras[1]) {
    document.getElementById("ceroCero").textContent = "O";
    IDS2.push("ceroCero");
    console.log(IDS2 + "  ISD2");
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
  var b1 = document.getElementById("ceroCero").textContent;
  var b2 = document.getElementById("ceroUno").textContent;
  var b3 = document.getElementById("ceroDos").textContent;
  var b4 = document.getElementById("unoCero").textContent;
  var b5 = document.getElementById("unoUno").textContent;
  var b6 = document.getElementById("unoDos").textContent;
  var b7 = document.getElementById("dosCero").textContent;
  var b8 = document.getElementById("dosUno").textContent;
  var b9 = document.getElementById("dosDos").textContent;

  /*   ganador = 1;
  console.log(ganador + " ganador en verificarGanador"); */

  if (b1 == "X" && b2 == "X" && b3 == "X") {
    // alert("Gano la X");
    // contador();
    ganadorX();
    // alerta();
    // limpiar();
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
    nGanador();
    document.getElementById("empate").innerHTML = empates;
  }
}

// "Resetea" el juego
function limpiar() {
  // ¿Por qué entra mas de una vez a limpiar?
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
  // ganador = 0;
  // console.log(ganador + "  ganador en limpiar");
}

console.log(ganador + "  ganador en general");

// Contador cuando el ganador es la "X"
function contador() {
  if (letra == "x") {
    contadorh++;
    console.log(contadorh + "  contador h");
  } else if (letra == "o") {
    contadorc++;
  }
  document.getElementById("Humano").innerHTML = contadorh;
  document.getElementById("Computadora").innerHTML = contadorc;
}

// Contador cuando el ganador es la "O"
function contador2() {
  if (letra == "o") {
    contadorh++;
  } else if (letra == "x") {
    contadorc++;
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
    juego();
  } else {
    alert("Antes de elegir una letra debe apretar el boton de comenzar a jugar");
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
    juego();
  } else {
    alert("Antes de elegir una letra debe apretar el boton de comenzar a jugar");
  }
}

// Funcion para el Timeout cuando gana la O
function ganadorO() {
  setTimeout(function () {
    contador2();
    limpiar();
    alert("Ganó el O");
  }, 100);
}

// Funcion para el Timeout cuando gana la X
function ganadorX() {
  setTimeout(function () {
    contador();
    limpiar();
    alert("Ganó la X");
  }, 100);
}

// Funcion para el Timeout cuando hay un empate
function nGanador() {
  setTimeout(function () {
    alert("Empate");
    empates++;
    limpiar();
  }, 100);
}
