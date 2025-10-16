import React, { useEffect, useState } from 'react'
import '../../StyleBancomar.css'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'bootstrap'

const Bancomar = () => {

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
    let tAltoBan=543*alto+"px";
    document.documentElement.style.setProperty('--tLetBan', tPorcentaje);
    document.documentElement.style.setProperty('--tLet1Ban', tPorcentaje1);
    document.documentElement.style.setProperty('--tLet2Ban', tPorcentaje2);
    document.documentElement.style.setProperty('--tAltoBan', tAltoBan);
  }



  return (
    <div className='fondoBan'>
      <header>
        <div className="barraHeaderBan" >
          <div className="divHeader1Ban" >
            <image className="logoHeaderBan"></image>
            <label className="nombreHeaderBan" >Bancomar</label>
          </div>
          <div className='divHeader2Ban'>
            <button className='botonGeneralBan' onClick={salir} onMouseEnter={cambiarIcono} onMouseLeave={cambiarIcono}>
              <img className="imaBotonGeneralBan" src={icono ? "home1.png" : "home2.png"} ></img>
              Home
            </button>
          </div>
        </div>
      </header>

      <div className='contenedorIndiceBan'>
        <div className="accordion" id="accordionExample">
          <div id="accordion-itemBan" className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button id="accordion-boton1Ban" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Indice
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div>
                <div className="contenedorHojaBan">
                  <button className='botonAABan' onClick={() => irItem("indice1")}>Título</button>
                  <button className='botonAABan' onClick={() => irItem("indice2")}>Descripción</button>
                  <button className='botonAABan' onClick={() => irItem("indice3")}>Herramientas Backend</button>
                  <button className='botonAABan' onClick={() => irItem("indice4")}>Herramientas Frontend</button>
                  <button className='botonAABan' onClick={() => irItem("indice5")}>Objetivo nivel cliente</button>
                  <button className='botonAABan' onClick={() => irItem("indice6")}>Objetivo nivel administrador</button>
                  <button className='botonAABan' onClick={() => irItem("indice7")}>Compilación</button>
                  <button className='botonAABan' onClick={() => irItem("indice8")}>Ver video</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="paginaBan" className='paginaBan'  >

        <div className='divImagenBan' id="indice1">
          <img className='imagenBan' src='recursosbancomar/fotobancomar1.png'></img>
        </div>
        <div className='divLetraBan'>
          <h1 className='tituloBan'>Título</h1>
          <p className='tituloLetraBan'>
            Bancomar proyecto banca on-line
            <br></br>
          </p>
        </div>

        <div className='divImagenBan' id="indice2">
          <img className='imagenBan' src='recursosbancomar/fotobancomar2.png'></img>
        </div>
        <div className='divLetraBan'>
          <h1 className='tituloBan'>Descripción</h1>
          <p className='tituloLetraBan'>
            Proyecto Full-Stack de banca on-line.<br />
            -Pagina web cliente.<br />
            -Servidor java.<br />
            -Programa javafx independiente para oficina.            
            
          </p>
        </div>

        <div className='divImagenBan' id="indice3">
          <img className='imagenBan' src='recursosbancomar/fotobancomar3.png'></img>
        </div>
        <div className='divLetraBan'>
          <h1 className='tituloBan'>Herramientas Backend</h1>
          <p className='tituloLetraBan'>
            <img className="imgIco1Ban" src="mysql.png"></img>Base de datos MySQL.<br />
            <img className="imgIco1Ban" src="java.png"></img>Lenguaje Java con arquitectura en capas.<br />
            Clases, Controller, DTO (Data Transfer Object), Mapper, Repositorio, Service.<br />
            <img className="imgIco1Ban" src="spring.png"></img>Frameworks Spring Boot + JPA + Lombok.<br />
            Claves usuario cifradas con Argon2.
          </p>
        </div>

        <div className='divImagenBan' id="indice4">
          <img className='imagenBan' src='recursosbancomar/fotobancomar4.png'></img>
        </div>
        <div className='divLetraBan'>
          <h1 className='tituloBan'>Herramientas Frontend</h1>
          <p className='tituloLetraBan'>
            <img className="imgIco1Ban" src="htlm.png"></img>Lenguaje HTML.<br />
            <img className="imgIco1Ban" src="javascript.png"></img>Lenguaje JavaScript.<br />
            <img className="imgIco1Ban" src="react.png"></img>Frameworks React.<br />
            <img className="imgIco1Ban" src="css.png"></img>Lenguaje de estilos CSS.<br />
            <img className="imgIco2Ban" src="bootstrap.png"></img>Bootstrap.<br />
            -Librería Axios.<br />
            -Librería jsPDF.
          </p>
        </div>

        <div className='divImagenBan' id="indice5">
          <img className='imagenBan' src='recursosbancomar/fotobancomar5.png'></img>
        </div>
        <div className='divLetraBan'>
          <h1 className='tituloBan'>Objetivo a nivel cliente</h1>
          <p className='tituloLetraBan'>
            -Interfaz clara e intuitiva para el cliente.<br />
            -Consulta de cuentas y movimientos.<br />
            -Paginación de los movimientos.<br />
            -Balance de saldos.<br />
            -Filtro de movimientos.<br />
            -Descarga de movimientos y asientos.<br />
            -Operaciones bancarias.<br />
            
          </p>
        </div>

        <div className='divImagenBan' id="indice6">
          <img className='imagenBan' src='recursosbancomar/fotobancomar6.png'></img>
        </div>
        <div className='divLetraBan'>
          <h1 className='tituloBan'>Objetivo a nivel administrador</h1>
          <p className='tituloLetraBan'>
            -Programa independiente JavaFX para oficina bancaria.<br />
            -CRUD para todas las tablas y subtablas.<br />
            -Búsquedas por cualquier campo.<br />
            -Operacines bancarias.<br />
            
          </p>
        </div>

        <div className='divImagenBan' id="indice7">
          <img className='imagenBan' src='recursosbancomar/fotobancomar7.png'></img>
        </div>
        <div className='divLetraBan'>
          <h1 className='tituloBan'>Compilación</h1>
          <p className='tituloLetraBan'>
            Para el desarrollo de la aplicación he usado:<br />
            - IDE VSCode<br />
            - Maven<br />
            - Spring<br />
            - Vite<br />
            - node.js y NPM.<br />
          </p>
        </div>

























        <div className='divVideoBan' id="indice8">
          <video className="videoBan" controls>
            <source src="/recursosbancomar/videobancomar1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>






      </div>







































      <footer className='divFooterBan'>
        <span>Proyecto Banca on-line</span>
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

export default Bancomar