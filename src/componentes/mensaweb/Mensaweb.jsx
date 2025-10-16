import React, { useEffect, useState } from 'react'
import '../../StyleMensaweb.css'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'bootstrap'

const Mensaweb = () => {

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
    let tAltoMen = 543 * alto + "px";
    document.documentElement.style.setProperty('--tLetMen', tPorcentaje);
    document.documentElement.style.setProperty('--tLet1Men', tPorcentaje1);
    document.documentElement.style.setProperty('--tLet2Men', tPorcentaje2);
    document.documentElement.style.setProperty('--tAltoMen', tAltoMen);
  }



  return (
    <div className='fondoMen'>
      <header>
        <div className="barraHeaderMen" >
          <div className="divHeader1Men" >
            <image className="logoHeaderMen"></image>
            <label className="nombreHeaderMen" >MensaWeb</label>
          </div>
          <div className='divHeader2Men'>
            <button className='botonGeneralMen' onClick={salir} onMouseEnter={cambiarIcono} onMouseLeave={cambiarIcono}>
              <img className="imaBotonGeneralMen" src={icono ? "home1.png" : "home2.png"} ></img>
              Home
            </button>
          </div>
        </div>
      </header>

      <div className='contenedorIndiceMen'>
        <div className="accordion" id="accordionExample">
          <div id="accordion-itemMen" className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button id="accordion-boton1Men" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Indice
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div>
                <div className="contenedorHojaMen">
                  <button className='botonAAMen' onClick={() => irItem("indice1")}>Título</button>
                  <button className='botonAAMen' onClick={() => irItem("indice2")}>Descripción</button>
                  <button className='botonAAMen' onClick={() => irItem("indice3")}>Herramientas Backend</button>
                  <button className='botonAAMen' onClick={() => irItem("indice4")}>Herramientas Frontend</button>
                  <button className='botonAAMen' onClick={() => irItem("indice5")}>Objetivo</button>
                  <button className='botonAAMen' onClick={() => irItem("indice6")}>Compatibilidad</button>
                  <button className='botonAAMen' onClick={() => irItem("indice7")}>Compilación</button>
                  <button className='botonAAMen' onClick={() => irItem("indice8")}>Ver video</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="paginaMen" className='paginaMen'  >

        <div className='divImagenMen' id="indice1">
          <img className='imagenMen' src='recursosmensaweb/fotomensa1.png'></img>
        </div>
        <div className='divLetraMen'>
          <h1 className='tituloMen'>Título</h1>
          <p className='tituloLetraMen'>
            MensaWeb proyecto de red social.
            <br></br>
          </p>
        </div>

        <div className='divImagenMen' id="indice2">
          <img className='imagenMen' src='recursosmensaweb/fotomensa2.png'></img>
        </div>
        <div className='divLetraMen'>
          <h1 className='tituloMen'>Descripción</h1>
          <p className='tituloLetraMen'>
            Aplicación para el intercambio de mensajes por internet.            
          </p>
        </div>

        <div className='divImagenMen' id="indice3">
          <img className='imagenMen' src='recursosmensaweb/fotomensa3.png'></img>
        </div>
        <div className='divLetraMen'>
          <h1 className='tituloMen'>Herramientas Backend </h1>
          <p className='tituloLetraMen'> 
            <img className="imgIco2Men" src="mysql.png"></img>Base de datos MySQL.<br />
            <img className="imgIco2Men" src="java.png"></img>Lenguaje Java con arquitectura en capas.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clases, Controller, DTO (Data Transfer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object), Mapper, Repositorio, Service.<br />
            <img className="imgIco2Men" src="spring.png"></img>Frameworks Spring Boot + JPA + Lombok.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Claves usuario cifradas con Argon2.
            
          </p>
        </div>

        <div className='divImagenMen' id="indice4">
          <img className='imagenMen' src='recursosmensaweb/fotomensa4.png'></img>
        </div>
        <div className='divLetraMen'>
          <h1 className='tituloMen'>Herramientas Frontend</h1>
          <p className='tituloLetraMen'>
            <img className="imgIco2Men" src="htlm.png"></img>Lenguaje HTML.<br />
            <img className="imgIco2Men" src="javascript.png"></img>Lenguaje JavaScript.<br />
            <img className="imgIco2Men" src="react.png"></img>Frameworks React.<br />
            <img className="imgIco2Men" src="css.png"></img>Lenguaje de estilos CSS.<br />
            <img className="imgIco2Men" src="bootstrap.png"></img>Bootstrap.<br />
            &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Librería Axios.<br />
                        
          </p>
        </div>

        <div className='divImagenMen' id="indice5">
          <img className='imagenMen' src='recursosmensaweb/fotomensa5.png'></img>
        </div>
        <div className='divLetraMen'>
          <h1 className='tituloMen'>Objetivo</h1>
          <p className='tituloLetraMen'>
            - Agregar y eliminar contactos.<br />
            - Enviar y recibir mensajes.<br />
            - Reenviar mensajes a cualquier contacto.<br />
            - Aviso de nuevos mensajes no leidos.<br />
            - Etiqueta de mensaje entregado y leido.<br />
            - Un solo registro en la base de datos por &nbsp;&nbsp;&nbsp;mensaje.<br />
            - Borrado de mensajes unilateral.<br />
            - Configuración de colores y fondo.<br />
            
          </p>
        </div>

        <div className='divImagenMen' id="indice6">
          <img className='imagenMen' src='recursosmensaweb/fotomensa6.png'></img>
        </div>
        <div className='divLetraMen'>
          <h1 className='tituloMen'>Compatibilidad</h1>
          <p className='tituloLetraMen'>
            - Se adapta automáticamente a cualquier &nbsp;&nbsp;&nbsp;pantalla móvil.<br />
            
          </p>
        </div>

        <div className='divImagenMen' id="indice7">
          <img className='imagenMen' src='recursosmensaweb/fotomensa7.png'></img>
        </div>
        <div className='divLetraMen'>
          <h1 className='tituloMen'>Compilación</h1>
          <p className='tituloLetraMen'>
            Para el desarrollo de la aplicación he usado:<br />
            - IDE VSCode<br />
            - Maven<br />
            - Spring<br />
            - Vite<br />
            - node.js y NPM.<br />
          </p>
        </div>

























        <div className='divVideoMen' id="indice8">
          <video className="videoMen" controls>
            <source src="/recursospresu/videopresu1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>






      </div>







































      <footer className='divFooterMen'>
        <span>Proyecto de red social de mensajería</span>
        <img className="imgIco" src='java.png'></img>
        <img className="imgIco" src="spring.png"></img>
        <img className="imgIco" src="mysql.png"></img>
        <span className='etiIco'>JPA</span>
        <img className="imgIco" src="htlm.png"></img>
        <img className="imgIco" src="javascript.png"></img>
        <img className="imgIco" src="css.png"></img>
        <img className="imgIco" src="react.png"></img>
        <label className='etiIco'>Axios</label>
      </footer>

    </div>
  )
}

export default Mensaweb

























