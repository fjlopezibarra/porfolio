
class MiDire {
  constructor(titulo, texto, icono, x, y, opacidad) {
    this.titulo = titulo;
    this.texto = texto;
    this.icono = icono;
    this.x = x;
    this.y = y;
    this.opacidad = opacidad;

    var dire = document.createElement("form");
    dire.type = "form";
    dire.name = "midire";
    dire.id = "midire";
    dire.style.left = x + "px";
    dire.style.top = y + "px";
    document.body.appendChild(dire);

    var dirediv = document.createElement("form");
    dirediv.type = "form";
    dirediv.id = "dirediv";
    dire.appendChild(dirediv);

    var diredibu = new Image();
    diredibu.id = "diredibu";
    switch (icono) {
      case 1:
        diredibu.src = "info.png";
        dire.style.background = "radial-gradient(rgba(0, 0, 100," + opacidad + "), rgba(0, 0, 0," + opacidad + "))"
        break;
      case 2:
        diredibu.src = "ok.png";
        dire.style.background = "radial-gradient(rgba(100, 100, 0," + opacidad + "), rgba(0, 0, 0," + opacidad + "))"
        break;
      case 3:
        diredibu.src = "error.png";
        dire.style.background = "radial-gradient(rgba(100, 0, 0," + opacidad + "), rgba(0, 0, 0," + opacidad + "))"
        break;
      default:
        diredibu.src = "info.png";
        dire.style.background = "radial-gradient(rgba(0, 0, 100," + opacidad + "), rgba(0, 0, 0," + opacidad + "))"
        break;
    }

    dirediv.appendChild(diredibu);

    var etidire1 = document.createElement("label");
    etidire1.type = "text";
    etidire1.id = "etidire1";
    etidire1.innerHTML = titulo;
    dirediv.appendChild(etidire1);

    var dirediv2 = document.createElement("form");
    dirediv2.type = "form";
    dirediv2.id = "dirediv2";
    dire.appendChild(dirediv2);
        
    var etidire2 = document.createElement("label");
    etidire2.id = "etidire2";
    etidire2.className="form-label";
    etidire2.type = "text";
    etidire2.innerHTML = texto;
    dirediv2.appendChild(etidire2);
    
    var inputdire = document.createElement("input");
    inputdire.id = "inputdire";
    inputdire.className="form-control";
    inputdire.type = "text";
    inputdire.placeholder = "introduzca ip";
    dirediv2.appendChild(inputdire);

    var diredivboton = document.createElement("form");
    diredivboton.type = "form";
    diredivboton.id = "diredivboton";
    dire.appendChild(diredivboton);

    var botondirecancelar = document.createElement('input');
    botondirecancelar.type = 'button';
    botondirecancelar.id = 'botondirecancelar';
    botondirecancelar.value = "Cancelar";
    botondirecancelar.onclick = cancelarDire;
    diredivboton.appendChild(botondirecancelar);

    var botondireaceptar = document.createElement('input');
    botondireaceptar.type = 'button';
    botondireaceptar.id = 'botondireaceptar';
    botondireaceptar.value = "Aceptar";
    botondireaceptar.onclick = aceptarDire;
    diredivboton.appendChild(botondireaceptar);

    function cancelarDire() {
      dire.remove();
    }

    function aceptarDire(){
      if(inputdire.value==null || inputdire.value==""){return;}
      sessionStorage.ip=inputdire.value;
      dire.remove();
    }

  }
}

export default MiDire