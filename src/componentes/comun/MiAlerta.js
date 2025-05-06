
class MiAlerta {
  constructor(titulo, texto, icono, x, y,opacidad) {
    this.titulo = titulo;
    this.texto = texto;
    this.icono = icono;
    this.x = x;
    this.y = y;
    this.opacidad=opacidad;

    var ale = document.createElement("form");
    ale.type = "form";
    ale.name = "miAlerta";
    ale.id = "miAlerta";
    ale.style.left = x + "px";
    ale.style.top = y + "px";
    document.body.appendChild(ale);

    var alediv = document.createElement("form");
    alediv.type = "form";
    alediv.id = "alediv";
    ale.appendChild(alediv);

    var aledibu = new Image();
    aledibu.id = "aledibu";
    switch (icono) {
      case 1:
        aledibu.src = "info.png";
        ale.style.background = "radial-gradient(rgba(0, 0, 100,"+opacidad+"), rgba(0, 0, 0,"+opacidad+"))"
        break;
      case 2:
        aledibu.src = "ok.png";
        ale.style.background = "radial-gradient(rgba(100, 100, 0,"+opacidad+"), rgba(0, 0, 0,"+opacidad+"))"
        break;
      case 3:
        aledibu.src = "error.png";
        ale.style.background = "radial-gradient(rgba(100, 0, 0,"+opacidad+"), rgba(0, 0, 0,"+opacidad+"))"
        break;
      default:
        aledibu.src = "info.png";
        ale.style.background = "radial-gradient(rgba(0, 0, 100,"+opacidad+"), rgba(0, 0, 0,"+opacidad+"))"
        break;
    }

    alediv.appendChild(aledibu);

    var etiale1 = document.createElement("label");
    etiale1.type = "text";
    etiale1.id = "etiale1";
    etiale1.innerHTML = titulo;
    alediv.appendChild(etiale1);

    var alediv2 = document.createElement("form");
    alediv2.type = "form";
    alediv2.id = "alediv2";
    ale.appendChild(alediv2);

    var etiale2 = document.createElement("label");
    etiale2.id = "etiale2";
    etiale2.type = "text";
    etiale2.innerHTML = texto;
    alediv2.appendChild(etiale2);

    var botonale = document.createElement('input');
    botonale.type = 'button';
    botonale.id = 'botonale';
    botonale.value = "Aceptar";
    botonale.onclick = quitarAlerta
    ale.appendChild(botonale);

    var crono = setTimeout(quitarAlerta, 5000);

    function quitarAlerta() {
      clearTimeout(crono);
      ale.remove();
    }

  }
}

export default MiAlerta