import React, { useState } from 'react'
import '../../StyleOnlycar.css'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'bootstrap'

const Onlycar = () => {

  const navigator = useNavigate();
  const [icono, setIcono] = useState(true)

  function salir() {
    navigator("/");
  }

  const irItem = (index) => {
    const item = document.getElementById(index);
    if (item) {
      item.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  function cambiarIcono() {
    setIcono(!icono);
  }


  return (
    <div className='fondo'>
      <header>
        <div className="barraHeader" >
          <div className="divHeader1" >
            <image className="logoHeader"></image>
            <label className="nombreHeader" >OnlyCar</label>
          </div>
          <div className='divHeader2'>
            <button className='botonGeneral' onClick={salir} onMouseEnter={cambiarIcono} onMouseLeave={cambiarIcono}>
              <img className="imaBotonGeneral" src={icono ? "home1.png" : "home2.png"} ></img>
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
                  <button className='botonAA' onClick={() => irItem("indice1")}>Introducción</button>
                  <button className='botonAA' onClick={() => irItem("indice2")}>Objetivo2</button>
                  <button className='botonAA' onClick={() => irItem("indice3")}>Objetivo3</button>
                  <button className='botonAA' onClick={() => irItem("indice4")}>Objetivo4</button>
                  <button className='botonAA' onClick={() => irItem("indice5")}>Objetivo5</button>
                  <button className='botonAA' onClick={() => irItem("indice6")}>Objetivo6</button>
                  <button className='botonAA' onClick={() => irItem("indice7")}>Objetivo7</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='pagina'  >

        <div className='divImagen' id="indice1">
          <img className='imagen' src='recursosonlycar/fotoonlycar1.png'></img>
        </div>
        <div className='divLetra'>
          <h1 className='titulo'>Introducción</h1>
          <p className='tituloLetra'>
            Proyecto Full-Stack de venta on-line de vehículos.
            <br></br>



            kdjkjdkjkdjkjdkjkdjkjdkjdk

            kjdkjkdjkdjkjkdjkjdkjkdjkdekjekjekjek
            ekjkejkejkejke
            ekjkje ejkjke kjkej kjkjekj kejkjkje
            dieje

            dkjdkjk
            dkjdkjkdkjkjkd
            kjdkjkdjkdjkjkdjkjdkjkdjkddkjkjkj

          </p>
        </div>



        <div className='divImagen' id="indice2">
          <img className='imagen' src='recursosonlycar/fotoonlycar2.png'></img>
        </div>

        <span>
          objetivo 2
          kdjkjdkjkdjkjdkjkdjkjdkjdk
          kjdkjkdjkdjkjkdjkjdkjkdjkdekjekjekjek
          ekjkejkejkejke
          ekjkje ejkjke kjkej kjkjekj kejkjkje
          dieje

          dkjdkjk
          dkjdkjkdkjkjkd
          kjdkjkdjkdjkjkdjkjdkjkdjkddkjkjkj

        </span>

        <div className='divImagen' id="indice3">
          <img className='imagen' src='recursosonlycar/fotoonlycar3.png'></img>
        </div>

        <span>
          objetivo 3
          kdjkjdkjkdjkjdkjkdjkjdkjdk
          kjdkjkdjkdjkjkdjkjdkjkdjkdekjekjekjek
          ekjkejkejkejke
          ekjkje ejkjke kjkej kjkjekj kejkjkje
          dieje

          dkjdkjk
          dkjdkjkdkjkjkd
          kjdkjkdjkdjkjkdjkjdkjkdjkddkjkjkj

        </span>

        <div className='divImagen' id="indice4">
          <img className='imagen' src='recursosonlycar/fotoonlycar4.png'></img>
        </div>

        <span>
          objetivo 4
          kdjkjdkjkdjkjdkjkdjkjdkjdk
          kjdkjkdjkdjkjkdjkjdkjkdjkdekjekjekjek
          ekjkejkejkejke
          ekjkje ejkjke kjkej kjkjekj kejkjkje
          dieje

          dkjdkjk
          dkjdkjkdkjkjkd
          kjdkjkdjkdjkjkdjkjdkjkdjkddkjkjkj

        </span>

        <div className='divImagen' id="indice5">
          <img className='imagen' src='recursosonlycar/fotoonlycar5.png'></img>
        </div>

        <span>
          objetivo 5
          kdjkjdkjkdjkjdkjkdjkjdkjdk
          kjdkjkdjkdjkjkdjkjdkjkdjkdekjekjekjek
          ekjkejkejkejke
          ekjkje ejkjke kjkej kjkjekj kejkjkje
          dieje

          dkjdkjk
          dkjdkjkdkjkjkd
          kjdkjkdjkdjkjkdjkjdkjkdjkddkjkjkj

        </span>

        <div className='divImagen' id="indice6">
          <img className='imagen' src='recursosonlycar/fotoonlycar6.png'></img>
        </div>

        <span>
          objetivo 6
          kdjkjdkjkdjkjdkjkdjkjdkjdk
          kjdkjkdjkdjkjkdjkjdkjkdjkdekjekjekjek
          ekjkejkejkejke
          ekjkje ejkjke kjkej kjkjekj kejkjkje
          dieje

          dkjdkjk
          dkjdkjkdkjkjkd
          kjdkjkdjkdjkjkdjkjdkjkdjkddkjkjkj

        </span>


        <div className='divImagen' id="indice7">
          <video className="video"  controls>
            <source src="/recursosonlycar/videoonlycar1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <span>
          objetivo 7
          Ejemplo de estructura para cada proyecto:
          Título del proyecto: Nombre claro y conciso del proyecto.
          Descripción general: Breve resumen del proyecto y su objetivo.
          Tu rol y responsabilidades: Explica tu papel en el proyecto y las tareas que realizaste.
          Tecnologías utilizadas: Detalla las herramientas, lenguajes de programación, frameworks y bases de datos que empleaste.
          Desafíos y soluciones: Describe los desafíos que enfrentaste y cómo los resolviste.
          Resultados y logros: Explica los resultados del proyecto y los logros que alcanzaste.
          Ejemplos visuales: Incluye capturas de pantalla, diagramas o enlaces a versiones en vivo.
          Código relevante (opcional): Si es apropiado, muestra fragmentos de código para ilustrar tu trabajo.
          Aprendizajes: Reflexiona sobre lo que aprendiste durante el desarrollo del proyecto.
        </span>











      </div>




























      <footer className='divFooter'>
        <span>Proyecto Full-Stack venta on-line</span>
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

export default Onlycar