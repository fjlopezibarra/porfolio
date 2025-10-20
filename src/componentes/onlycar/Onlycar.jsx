import React, { useState, useEffect } from 'react'
import '../../StyleOnlycar.css'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'bootstrap'

const Onlycar = () => {

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
    let alto=(window.innerHeight-100)/541;
    let tPorcentaje = 20 * ventana + "px";
    let tPorcentaje1 = 28 * ventana + "px";
    let tPorcentaje2 = 30 * ventana + "px";
    let tAlto=543*alto+"px";
    document.documentElement.style.setProperty('--tLet', tPorcentaje);
    document.documentElement.style.setProperty('--tLet1', tPorcentaje1);
    document.documentElement.style.setProperty('--tLet2', tPorcentaje2);
    document.documentElement.style.setProperty('--tAlto', tAlto);
  }





  return (
    <div id="fondo" className='fondo'>
      <header>
        <div className="barraHeader" >
          <div className="divHeader1" >
            <image className="logoHeader"></image>
            <label className="nombreHeader" >OnlyCar</label>
          </div>
          <div className='divHeader2'>
            <button className='botonGeneral' onClick={salir} onMouseEnter={cambiarIcono} onMouseLeave={cambiarIcono}>
              <img className="imaBotonGeneral" src={icono ? "recursos/home1.png" : "recursos/home2.png"} ></img>
              Home
            </button>
          </div>
        </div>
      </header>

      <div className='contenedorIndice'>
        <div className="accordion" id="accordionExample">
          <div id="accordion-item" className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button id="accordion-boton1" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Indice
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div>
                <div className="contenedorHoja">
                  <button className='botonAA' onClick={() => irItem("indice1")}>Título</button>
                  <button className='botonAA' onClick={() => irItem("indice2")}>Descripción</button>
                  <button className='botonAA' onClick={() => irItem("indice3")}>Herramientas Backend</button>
                  <button className='botonAA' onClick={() => irItem("indice4")}>Herramientas Frontend</button>
                  <button className='botonAA' onClick={() => irItem("indice5")}>Objetivo nivel cliente</button>
                  <button className='botonAA' onClick={() => irItem("indice6")}>Objetivo nivel administrador</button>
                  <button className='botonAA' onClick={() => irItem("indice7")}>Compilación</button>
                  <button className='botonAA' onClick={() => irItem("indice8")}>Ver video</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="pagina" className='pagina'  >

        <div className='divImagen' id="indice1">
          <img className='imagen' src='recursosonlycar/fotoonlycar1.png'></img>
        </div>
        <div className='divLetra'>
          <h1 className='tituloOnly'>Título</h1>
          <p className='tituloLetra'>
            Proyecto Full-Stack de venta on-line de vehículos.
            <br></br>
          </p>
        </div>

        <div className='divImagen' id="indice2">
          <img className='imagen' src='recursosonlycar/fotoonlycar2.png'></img>
        </div>
        <div className='divLetra'>
          <h1 className='tituloOnly'>Descripción</h1>
          <p className='tituloLetra'>
            Proyecto ejemplo de venta de vehículos on-line realizado integramente por mí.
            <br></br>
            Dos niveles de usuarios:<br />
            - Usuario tipo cliente.<br />
            - Usuario tipo administrador.<br />
            El usuario administrador tiene acceso a las operaciones de mantenimiento de la base de datos desde la página web.
          </p>
        </div>

        <div className='divImagen' id="indice3">
          <img className='imagen' src='recursosonlycar/fotoonlycar3.png'></img>
        </div>
        <div className='divLetra'>
          <h1 className='tituloOnly'>Herramientas Backend</h1>
          <p className='tituloLetra'>
            <img className="imgIco1" src="recursos/mysql.png"></img>Base de datos MySQL.<br />
            <img className="imgIco1" src="recursos/java.png"></img>Lenguaje Java con arquitectura en capas.<br />
            Clases, Controller, DTO (Data Transfer Object), Mapper, Repositorio, Service.<br />
            <img className="imgIco1" src="recursos/spring.png"></img>Frameworks Spring Boot + JPA + Lombok.<br />
            Claves usuario cifradas con Argon2.
          </p>
        </div>

        <div className='divImagen' id="indice4">
          <img className='imagen' src='recursosonlycar/fotoonlycar4.png'></img>
        </div>
        <div className='divLetra'>
          <h1 className='tituloOnly'>Herramientas Frontend</h1>
          <p className='tituloLetra'>
            <img className="imgIco1" src="recursos/htlm.png"></img>Lenguaje HTML.<br />
            <img className="imgIco1" src="recursos/javascript.png"></img>Lenguaje JavaScript.<br />
            <img className="imgIco1" src="recursos/react.png"></img>Frameworks React.<br />
            <img className="imgIco1" src="recursos/css.png"></img>Lenguaje de estilos CSS.<br />
            <img className="imgIco2" src="recursos/bootstrap.png"></img>Bootstrap.<br />
            -Librería Axios.<br />
            -Librería jsPDF.
          </p>
        </div>

        <div className='divImagen' id="indice5">
          <img className='imagen' src='recursosonlycar/fotoonlycar5.png'></img>
        </div>
        <div className='divLetra'>
          <h1 className='tituloOnly'>Objetivo a nivel cliente</h1>
          <p className='tituloLetra'>
            -Interfaz clara e intuitiva para el cliente.<br />
            -Autopresentación<br />
            -Transiciones en botones y otros componentes.<br />
            -Filtros de unión y busquedas por cualquier  campo.<br />
            -Cuadros de alerta personalizados.<br />
            -Carrito de compra.<br />
            -Descarga de factura en formato pdf.<br />
            -Color de ambiente personalizado.
          </p>
        </div>

        <div className='divImagen' id="indice6">
          <img className='imagen' src='recursosonlycar/fotoonlycar6.png'></img>
        </div>
        <div className='divLetra'>
          <h1 className='tituloOnly'>Objetivo a nivel administrador</h1>
          <p className='tituloLetra'>
            -Botón administrar solo disponible para el administrador.<br />
            -CRUD para totas las tablas y subtablas.<br />
            -Busquedas por cualquier campo.<br />
            -Actualización automática del Stock en cada compra.<br />
            -Informes de venta, stock y carrito con campos de filtro.<br />
          </p>
        </div>

        <div className='divImagen' id="indice7">
          <img className='imagen' src='recursosonlycar/fotoonlycar7.png'></img>
        </div>
        <div className='divLetra'>
          <h1 className='tituloOnly'>Compilación</h1>
          <p className='tituloLetra'>
            Para el desarrollo de la aplicación he usado:<br />
            - IDE VSCode<br />
            - Maven<br />
            - Spring<br />
            - Vite<br />
            - node.js y NPM.<br />
          </p>
        </div>

























        <div className='divVideo' id="indice8">
          <video className="video" controls>
            <source src="recursosonlycar/videoonlycar1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>






      </div>




























      <footer className='divFooter'>
        <span>Proyecto Full-Stack venta on-line</span>
        <img className="imgIco" src='recursos/java.png'></img>
        <img className="imgIco" src="recursos/spring.png"></img>
        <img className="imgIco" src="recursos/mysql.png"></img>
        <span className='etiIco'>JPA</span>
        <img className="imgIco" src="recursos/htlm.png"></img>
        <img className="imgIco" src="recursos/javascript.png"></img>
        <img className="imgIco" src="recursos/css.png"></img>
        <img className="imgIco" src="recursos/react.png"></img>
        <label className='etiIco'>Axios</label>
      </footer>

    </div>
  )
}

export default Onlycar