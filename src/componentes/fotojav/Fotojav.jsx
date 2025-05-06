import React, { useState } from 'react'
import '../../StyleFotoJav.css'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'bootstrap'

const Fotojav = () => {

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
    <div className='fondoFot'>
      <header>
        <div className="barraHeaderFot" >
          <div className="divHeader1Fot" >
            <image className="logoHeaderFot"></image>
            <label className="nombreHeaderFot" >SimpleFotoJav</label>
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
          <div id="accordion-itemPre" className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button id="accordion-boton1Fot" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Indice
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div>
                <div className="contenedorHojaFot">
                  <button className='botonAAFot' onClick={() => irItem("indice1")}>Introducción</button>
                  <button className='botonAAFot' onClick={() => irItem("indice2")}>Objetivo2</button>
                  <button className='botonAAFot' onClick={() => irItem("indice3")}>Objetivo3</button>
                  <button className='botonAAFot' onClick={() => irItem("indice4")}>Objetivo4</button>
                  <button className='botonAAFot' onClick={() => irItem("indice5")}>Objetivo5</button>
                  <button className='botonAAFot' onClick={() => irItem("indice6")}>Objetivo6</button>
                  <button className='botonAAFot' onClick={() => irItem("indice7")}>Objetivo7</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='paginaFot'  >

        <div className='divImagenFot' id="indice1">
          <img className='imagenFot' src='recursosfotojav/fotofotojav1.png'></img>
        </div>
        <div className='divLetraFot'>
          <h1 className='tituloFot'>Introducción</h1>
          <p className='tituloLetraFot'>
            Proyecto Full-Stack de gestión bancaria on-line.
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



        <div className='divImagenFot' id="indice2">
          <img className='imagenFot' src='recursosbancomar/fotobancomar2.png'></img>
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

        <div className='divImagenFot' id="indice3">
          <img className='imagenFot' src='recursosbancomar/fotobancomar3.png'></img>
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

        <div className='divImagenFot' id="indice4">
          <img className='imagenFot' src='recursosbancomar/fotobancomar4.png'></img>
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

        <div className='divImagenFot' id="indice5">
          <img className='imagenFot' src='recursosbancomar/fotobancomar5.png'></img>
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

        <div className='divImagenFot' id="indice6">
          <img className='imagenFot' src='recursosbancomar/fotobancomar6.png'></img>
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


        <div className='divImagenFot' id="indice7">
          <video className="videoFot"  controls>
            <source src='recursosbancomar/videobancomar.mp4' type="video/mp4" />
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




























      <footer className='divFooterFot'>
        <span>Proyecto Full-Stack gestión bancaria</span>
        <img className="imgIcoFot" src='visualbasic.png'></img>
        <label className='etiIcoFot'>Sql</label>
      </footer>

    </div>
  )
}

export default Fotojav