function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio);

  if (elemento != null && elemento.locaName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTecla = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTecla.length; contador++) {
  const tecla = listaDeTecla[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
