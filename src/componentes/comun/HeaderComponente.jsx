import { Dropdown } from 'bootstrap'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MiDat from './MiDat';
import MiAlerta from './MiAlerta';
import { guardarConfi } from '../../services/ConfiService';

const HeaderComponente = () => {

  const [rojo, setRojo] = useState(0);
  const [verde, setVerde] = useState(0);
  const [azul, setAzul] = useState(0);

  if (MiDat.colo == "" || MiDat.colo == null || MiDat.colo == "0") {
    iniciarColor();
    MiDat.colo = "1";
  }

  function iniciarColor() {
    document.documentElement.style.setProperty('--rojo', 0);
    document.documentElement.style.setProperty('--verde', 0);
    document.documentElement.style.setProperty('--azul', 0);

    document.documentElement.style.setProperty('--rojo1', 0);
    document.documentElement.style.setProperty('--verde1', 0);
    document.documentElement.style.setProperty('--azul1', 0);

    document.documentElement.style.setProperty('--rojo2', 0);
    document.documentElement.style.setProperty('--verde2', 0);
    document.documentElement.style.setProperty('--azul2', 0);

    document.documentElement.style.setProperty('--rojo3', 50);
    document.documentElement.style.setProperty('--verde3', 50);
    document.documentElement.style.setProperty('--azul3', 50);
  }

  const navigator = useNavigate();

  let miAlerta;
  let visi = false;
  let clogin = true;
  let ccli = false;

  if (MiDat.tipo == "" || MiDat.tipo == null || MiDat.tipo == "0") {
    visi = false;
  } else {
    visi = true;
  }

  if (MiDat.veri == "" || MiDat.veri == null) {
    clogin = true; ccli = false
    MiDat.ncesta = 0;
    MiDat.cestax = "0px";
    MiDat.cestay = "0px";

  } else {
    clogin = false; ccli = true;
    actualizaPosicion();
  }

  function actualizaPosicion() {
    const rect = document.getElementById("cestaBoton").getBoundingClientRect();
    MiDat.cestax = rect.left + window.scrollX + 10 + "px";
    MiDat.cestay = rect.top + window.scrollY - 5 + "px";
  };

  function filtrar() {
    navigator("/filtrar");
  }

  function home() {
    navigator("/");
  }

  function login() {
    navigator("/login");
  }

  function cliente() {
    navigator("/datospersonales");
  }

  function administrar() {
    if (MiDat.tipo == "0") { return; }
    navigator("/administrar")
  }

  function abrirCesta() {
    if (MiDat.veri == "" || MiDat.veri == null || MiDat.veri == "false") {
      miAlerta = new MiAlerta("Información", "Para poder hacer compras debes\nde estar registrado.", 1, 500, 150, 1);
      return;
    }
    navigator("/cesta")
  }

  function misFacturas() {
    if (MiDat.veri == "" || MiDat.veri == null || MiDat.veri == "false") {
      miAlerta = new MiAlerta("Información", "Debes registrarte para poder\nver tus facturas.", 1, 500, 150, 1);
      return;
    }
    navigator("/misfacturas");
  }

  function ponerConfi() {
    if (MiDat.veri == "false" || MiDat.veri == null) {
      miAlerta = new MiAlerta("Información", "Debes registrarte para poder\nguardar la configuración.", 1, 500, 150, 1);
      return;
    }
    document.getElementById('panelConfi').classList.toggle('active');
  }

  function cambioRojo(event) {
    if (event.target.value < 0) { event.target.value = 0; }
    if (event.target.value > 255) { event.target.value = 255; }
    document.documentElement.style.setProperty('--r', event.target.value);
    document.documentElement.style.setProperty('--g', verde);
    document.documentElement.style.setProperty('--b', azul);
    setRojo(event.target.value)
  }

  function cambioVerde(event) {
    if (event.target.value < 0) { event.target.value = 0; }
    if (event.target.value > 255) { event.target.value = 255; }
    document.documentElement.style.setProperty('--r', rojo);
    document.documentElement.style.setProperty('--g', event.target.value);
    document.documentElement.style.setProperty('--b', azul);
    setVerde(event.target.value)

  }

  function cambioAzul(event) {
    if (event.target.value < 0) { event.target.value = 0; }
    if (event.target.value > 255) { event.target.value = 255; }
    document.documentElement.style.setProperty('--r', rojo);
    document.documentElement.style.setProperty('--g', verde);
    document.documentElement.style.setProperty('--b', event.target.value);
    setAzul(event.target.value)

  }

  function colox() {
    document.documentElement.style.setProperty('--rojo', rojo);
    document.documentElement.style.setProperty('--verde', verde);
    document.documentElement.style.setProperty('--azul', azul);

    document.documentElement.style.setProperty('--rojo1', Math.round(rojo * 0.39));
    document.documentElement.style.setProperty('--verde1', Math.round(verde * 0.39));
    document.documentElement.style.setProperty('--azul1', Math.round(azul * 0.39));

    document.documentElement.style.setProperty('--rojo2', Math.round(rojo * 0.19));
    document.documentElement.style.setProperty('--verde2', Math.round(verde * 0.19));
    document.documentElement.style.setProperty('--azul2', Math.round(azul * 0.19));

    document.documentElement.style.setProperty('--rojo3', Math.round(rojo * 0.58));
    document.documentElement.style.setProperty('--verde3', Math.round(verde * 0.58));
    document.documentElement.style.setProperty('--azul3', Math.round(azul * 0.58));

    ponerConfi();
    actualizaConfi("colox");
  }

  function colo1() {
    document.documentElement.style.setProperty('--rojo', 255);
    document.documentElement.style.setProperty('--verde', 0);
    document.documentElement.style.setProperty('--azul', 0);

    document.documentElement.style.setProperty('--rojo1', 100);
    document.documentElement.style.setProperty('--verde1', 0);
    document.documentElement.style.setProperty('--azul1', 0);

    document.documentElement.style.setProperty('--rojo2', 50);
    document.documentElement.style.setProperty('--verde2', 0);
    document.documentElement.style.setProperty('--azul2', 0);

    document.documentElement.style.setProperty('--rojo3', 150);
    document.documentElement.style.setProperty('--verde3', 0);
    document.documentElement.style.setProperty('--azul3', 0);

    ponerConfi();
    actualizaConfi("colo1")
  }

  function colo2() {
    document.documentElement.style.setProperty('--rojo', 0);
    document.documentElement.style.setProperty('--verde', 100);
    document.documentElement.style.setProperty('--azul', 0);

    document.documentElement.style.setProperty('--rojo1', 0);
    document.documentElement.style.setProperty('--verde1', 50);
    document.documentElement.style.setProperty('--azul1', 0);

    document.documentElement.style.setProperty('--rojo2', 0);
    document.documentElement.style.setProperty('--verde2', 25);
    document.documentElement.style.setProperty('--azul2', 0);

    document.documentElement.style.setProperty('--rojo3', 0);
    document.documentElement.style.setProperty('--verde3', 100);
    document.documentElement.style.setProperty('--azul3', 0);

    ponerConfi();
    actualizaConfi("colo2")
  }

  function colo3() {
    document.documentElement.style.setProperty('--rojo', 0);
    document.documentElement.style.setProperty('--verde', 0);
    document.documentElement.style.setProperty('--azul', 100);

    document.documentElement.style.setProperty('--rojo1', 0);
    document.documentElement.style.setProperty('--verde1', 0);
    document.documentElement.style.setProperty('--azul1', 50);

    document.documentElement.style.setProperty('--rojo2', 0);
    document.documentElement.style.setProperty('--verde2', 0);
    document.documentElement.style.setProperty('--azul2', 25);

    document.documentElement.style.setProperty('--rojo3', 0);
    document.documentElement.style.setProperty('--verde3', 0);
    document.documentElement.style.setProperty('--azul3', 100);

    ponerConfi();
    actualizaConfi("colo3")
  }

  function colo4() {
    document.documentElement.style.setProperty('--rojo', 100);
    document.documentElement.style.setProperty('--verde', 100);
    document.documentElement.style.setProperty('--azul', 0);

    document.documentElement.style.setProperty('--rojo1', 50);
    document.documentElement.style.setProperty('--verde1', 50);
    document.documentElement.style.setProperty('--azul1', 0);

    document.documentElement.style.setProperty('--rojo2', 25);
    document.documentElement.style.setProperty('--verde2', 25);
    document.documentElement.style.setProperty('--azul2', 0);

    document.documentElement.style.setProperty('--rojo3', 100);
    document.documentElement.style.setProperty('--verde3', 100);
    document.documentElement.style.setProperty('--azul3', 0);

    ponerConfi();
    actualizaConfi("colo4")
  }

  function colo5() {
    document.documentElement.style.setProperty('--rojo', 0);
    document.documentElement.style.setProperty('--verde', 100);
    document.documentElement.style.setProperty('--azul', 100);

    document.documentElement.style.setProperty('--rojo1', 0);
    document.documentElement.style.setProperty('--verde1', 50);
    document.documentElement.style.setProperty('--azul1', 50);

    document.documentElement.style.setProperty('--rojo2', 0);
    document.documentElement.style.setProperty('--verde2', 25);
    document.documentElement.style.setProperty('--azul2', 25);

    document.documentElement.style.setProperty('--rojo3', 0);
    document.documentElement.style.setProperty('--verde3', 100);
    document.documentElement.style.setProperty('--azul3', 100);

    ponerConfi();
    actualizaConfi("colo5")
  }

  function colo6() {
    document.documentElement.style.setProperty('--rojo', 0);
    document.documentElement.style.setProperty('--verde', 0);
    document.documentElement.style.setProperty('--azul', 0);

    document.documentElement.style.setProperty('--rojo1', 0);
    document.documentElement.style.setProperty('--verde1', 0);
    document.documentElement.style.setProperty('--azul1', 0);

    document.documentElement.style.setProperty('--rojo2', 0);
    document.documentElement.style.setProperty('--verde2', 0);
    document.documentElement.style.setProperty('--azul2', 0);

    document.documentElement.style.setProperty('--rojo3', 50);
    document.documentElement.style.setProperty('--verde3', 50);
    document.documentElement.style.setProperty('--azul3', 50);

    ponerConfi();
    actualizaConfi("colo6")
  }

  async function actualizaConfi(colo) {
    const confi = {};
    confi.usuario = MiDat.usuario;
    confi.color = colo;
    if (colo == "colox") {
      confi.rojo = rojo;
      confi.verde = verde;
      confi.azul = azul;
    } else {
      confi.rojo = 0;
      confi.verde = 0;
      confi.azul = 0;
    }
    const guardaconfi = await guardarConfi(confi).then((response) => {
      if (response.data == null) {
        miAlerta = new MiAlerta("Error", "No se ha podido realizar la operación", 3, 500, 150, 1);
        return;
      }
    }).catch(error => {
      miAlerta = new MiAlerta("Error", "Error al realizar la operación.", 3, 500, 150, 1);
      return;
    })
  }



  return (
    <div>
      <header>
        <div className="barraTitulo" >
          <div className="divTitulo1" onClick={home}>
            <image className="logoTitulo"></image>
            <label className="nombreTitulo" >OnlyCar S.A.</label>
          </div>

          <div className='divTitulo4'>
            <button className='filtroBoton' onClick={filtrar}>
              Listado de vehículos
            </button>
          </div>

          {visi && (
            <div className='divOculto'>
              <button className='filtroBoton' onClick={administrar} >
                Administrar
              </button>
            </div>
          )}

          <div className='divCesta'>
            <button id="cestaBoton" className='cestaBoton' onClick={abrirCesta}>
              <img className="cestaImagen" src="/carrito.png"></img>
              <label className="contadorCesta">{MiDat.ncesta}</label>
            </button>
          </div>

          <div className='divTituloFactura'>
            <button className='filtroBoton' onClick={misFacturas}>
              Mis facturas
            </button>
          </div>

          <div className="divTitulo3">
            {clogin && (
              <button className='loginBoton' onClick={login}>
                login
              </button>
            )}
            {ccli && (
              <button className='clienteBoton' onClick={cliente}>
                <img className="clienteImagen" src="/cliente.png"></img>
              </button>
            )}
          </div>

          <div className='divTituloConfi'>

            <div id="panelConfi" className='panelConfi'>
              <div className='divTituloPaneConfi'>
                <label className='tituloPanelConfi'>Color ambiente</label>
              </div>
              <div className="cuerpoConfi">
                <div className='colores'>
                  <div className='colo1' onClick={colo1}></div>
                  <div className='colo2' onClick={colo2}></div>
                  <div className='colo3' onClick={colo3}></div>
                  <div className='colo4' onClick={colo4}></div>
                  <div className='colo5' onClick={colo5}></div>
                  <div className='colo6' onClick={colo6}></div>
                </div>

                <div className='divPersonalizar'>
                  <label>Rojo</label>
                  <label>Verde</label>
                  <label>Azul</label>
                  <input className="campon" type='number' min={0} max={255} value={rojo} onChange={cambioRojo}></input>
                  <input className="campon" type='number' min={0} max={255} value={verde} onChange={cambioVerde}></input>
                  <input className="campon" type='number' min={0} max={255} value={azul} onChange={cambioAzul}></input>
                  <input className="range" type='range' min={0} max={255} value={rojo} onChange={cambioRojo}></input>
                  <input className="range" type='range' min={0} max={255} value={verde} onChange={cambioVerde}></input>
                  <input className="range" type='range' min={0} max={255} value={azul} onChange={cambioAzul}></input>
                  <div className='coloPerso' onClick={colox}></div>
                </div>
              </div>
            </div>




            <button className='filtroBoton' onClick={ponerConfi}>
              <img className="confiImagen" src="/color.png"></img>
            </button>
          </div>

        </div>
      </header>
    </div >

  )

}

export default HeaderComponente