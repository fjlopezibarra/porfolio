import React, { useEffect, useState } from 'react'
import '../../StyleFotojav.css'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'bootstrap'

const Fotojav = () => {

  const navigator = useNavigate();
  const [icono, setIcono] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', ajustar);
  }, []);

  function salir() {
    navigator("/");
  }

  const irItem = (index) => {
    const item = document.getElementById(index);
    if (item) {
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  function cambiarIcono() {
    setIcono(!icono);
  }

  ajustar();

  function ajustar() {
    let ventana = (window.innerWidth - 250) / 1200;
    let alto = (window.innerHeight - 100) / 541;
    let tPorcentaje = 20 * ventana + "px";
    let tPorcentaje1 = 28 * ventana + "px";
    let tPorcentaje2 = 30 * ventana + "px";
    let tAltoPre = 543 * alto + "px";
    document.documentElement.style.setProperty('--tLetFot', tPorcentaje);
    document.documentElement.style.setProperty('--tLet1Fot', tPorcentaje1);
    document.documentElement.style.setProperty('--tLet2Fot', tPorcentaje2);
    document.documentElement.style.setProperty('--tAltoFot', tAltoPre);
  }



  return (
    <div className='fondoFot'>
      <header>
        <div className="barraHeaderFot" >
          <div className="divHeader1Fot" >
            <image className="logoHeaderFot"></image>
            <label className="nombreHeaderFot" >Fotojav</label>
          </div>
          <div className='divHeader2Fot'>
            <button className='botonGeneralFot' onClick={salir} onMouseEnter={cambiarIcono} onMouseLeave={cambiarIcono}>
              <img className="imaBotonGeneralFot" src={icono ? "home1.png" : "home2.png"} ></img>
              Home
            </button>
          </div>
        </div>
      </header>

      <div className='contenedorIndiceFot'>
        <div className="accordion" id="accordionExample">
          <div id="accordion-itemFot" className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button id="accordion-boton1Fot" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Indice
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div>
                <div className="contenedorHojaFot">
                  <button className='botonAAFot' onClick={() => irItem("indice1")}>Título</button>
                  <button className='botonAAFot' onClick={() => irItem("indice2")}>Descripción</button>
                  <button className='botonAAFot' onClick={() => irItem("indice3")}>Herramientas</button>
                  <button className='botonAAFot' onClick={() => irItem("indice4")}>Objetivo 1</button>
                  <button className='botonAAFot' onClick={() => irItem("indice5")}>Objetivo 2</button>
                  <button className='botonAAFot' onClick={() => irItem("indice6")}>Objetivo 3</button>
                  <button className='botonAAFot' onClick={() => irItem("indice7")}>Compilación</button>
                  <button className='botonAAFot' onClick={() => irItem("indice8")}>Ver video</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="paginaFot" className='paginaFot'  >

        <div className='divImagenFot' id="indice1">
          <img className='imagenFot' src='recursosfotojav/fotofotojav1.png'></img>
        </div>
        <div className='divLetraFot'>
          <h1 className='tituloFot'>Título</h1>
          <p className='tituloLetraFot'>
            Proyecto de clasificación de fotos.
            <br></br>
          </p>
        </div>

        <div className='divImagenFot' id="indice2">
          <img className='imagenFot' src='recursosfotojav/fotofotojav2.png'></img>
        </div>
        <div className='divLetraFot'>
          <h1 className='tituloFot'>Descripción</h1>
          <p className='tituloLetraFot'>
            Aplicación para organizar, clasificar, presentar y crear álbunes personalizados.
            <br></br>
            Desarrollada en Visual Basic y base de datos Microsoft SQL Server.
          </p>
        </div>

        <div className='divImagenFot' id="indice3">
          <img className='imagenFot' src='recursosfotojav/fotofotojav3.png'></img>
        </div>
        <div className='divLetraFot'>
          <h1 className='tituloFot'>Herramientas</h1>
          <p className='tituloLetraFot'>
            <img className="imgIco2Fot" src="visualbasic.png"></img>Microsoft Visual Basic.<br />
            <img className="imgIco2Fot" src="sql.png"></img>Microsoft SQL Server.<br />
            
          </p>
        </div>

        <div className='divImagenFot' id="indice4">
          <img className='imagenFot' src='recursosfotojav/fotofotojav4.png'></img>
        </div>
        <div className='divLetraFot'>
          <h1 className='tituloFot'>Objetivo 1</h1>
          <p className='tituloLetraFot'>
            -Elección de directorios para sincronizar.<br />
            -Clasificación rápida.<br />
            -Árbol de fotos.<br />
            -Varios modos de presentación.<br />
            -Creación de álbunes personalizados.<br />
            -Autocreación de álbunes.            
                        
          </p>
        </div>

        <div className='divImagenFot' id="indice5">
          <img className='imagenFot' src='recursosfotojav/fotofotojav5.png'></img>
        </div>
        <div className='divLetraFot'>
          <h1 className='tituloFot'>Objetivo 2</h1>
          <p className='tituloLetraFot'>
            -Arrastrar y soltar fotos de un contenedor a otro.<br />
            -Ampliación de fotos a pantalla completa con solo pulsar el boton derecho.<br />  
            -Álbum de música.<br />
            -Música en segundo plano durante las presentaciónes.<br />          
            
          </p>
        </div>

        <div className='divImagenFot' id="indice6">
          <img className='imagenFot' src='recursosfotojav/fotofotojav6.png'></img>
        </div>
        <div className='divLetraFot'>
          <h1 className='tituloFot'>Objetivo 3</h1>
          <p className='tituloLetraFot'>
            -Migración, copia de seguridad y restauración de las fotos.<br />
            -Collage fotos.<br />
            -Juego puzle de fotos con varios niveles.            
            
          </p>
        </div>

        <div className='divImagenFot' id="indice7">
          <img className='imagenFot' src='recursosfotojav/fotofotojav7.png'></img>
        </div>
        <div className='divLetraFot'>
          <h1 className='tituloFot'>Compilación</h1>
          <p className='tituloLetraFot'>
            Para el desarrollo de la aplicación he usado:<br />
            - Microsoft Visual Basic 2010<br />            
          </p>
        </div>

























        <div className='divVideoFot' id="indice8">
          <video className="videoFot" controls>
            <source src="/recursospresu/videopresu1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>






      </div>







































      <footer className='divFooterFot'>
        <span>Proyecto de clasificación de fotos</span>
        <img className="imgIcoFot" src='visualbasic.png'></img>
        <img className="imgIcoFot" src='sql.png'></img>                
      </footer>

    </div>
  )
}

export default Fotojav
