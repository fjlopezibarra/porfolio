import React, { useState } from 'react'
import '../../StylePresu.css'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'bootstrap'

const Presu = () => {

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
    <div className='fondoPre'>
      <header>
        <div className="barraHeaderPre" >
          <div className="divHeader1Pre" >
            <image className="logoHeaderPre"></image>
            <label className="nombreHeaderPre" >Presu</label>
          </div>
          <div className='divHeader2Pre'>
            <button className='botonGeneralPre' onClick={salir} onMouseEnter={cambiarIcono} onMouseLeave={cambiarIcono}>
              <img className="imaBotonGeneralPre" src={icono ? "home1.png" : "home2.png"} ></img>
              Home
            </button>
          </div>
        </div>
      </header>

      <div className='contenedorIndicePre'>
        <div className="accordion" id="accordionExample">
          <div id="accordion-itemPre" className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button id="accordion-boton1Pre" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Indice
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div>
                <div className="contenedorHojaPre">
                  <button className='botonAAPre' onClick={() => irItem("indice1")}>Introducción</button>
                  <button className='botonAAPre' onClick={() => irItem("indice2")}>Objetivo2</button>
                  <button className='botonAAPre' onClick={() => irItem("indice3")}>Objetivo3</button>
                  <button className='botonAAPre' onClick={() => irItem("indice4")}>Objetivo4</button>
                  <button className='botonAAPre' onClick={() => irItem("indice5")}>Objetivo5</button>
                  <button className='botonAAPre' onClick={() => irItem("indice6")}>Objetivo6</button>
                  <button className='botonAAPre' onClick={() => irItem("indice7")}>Objetivo7</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='paginaPre'  >

        <div className='divImagenPre' id="indice1">
          <img className='imagenPre' src='recursospresu/fotopresu1.png'></img>
        </div>
        <div className='divLetraPre'>
          <h1 className='tituloPre'>Introducción</h1>
          <p className='tituloLetraPre'>
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



        <div className='divImagenPre' id="indice2">
          <img className='imagenPre' src='recursosbancomar/fotobancomar2.png'></img>
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

        <div className='divImagenPre' id="indice3">
          <img className='imagenPre' src='recursosbancomar/fotobancomar3.png'></img>
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

        <div className='divImagenPre' id="indice4">
          <img className='imagenPre' src='recursosbancomar/fotobancomar4.png'></img>
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

        <div className='divImagenPre' id="indice5">
          <img className='imagenPre' src='recursosbancomar/fotobancomar5.png'></img>
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

        <div className='divImagenPre' id="indice6">
          <img className='imagenPre' src='recursosbancomar/fotobancomar6.png'></img>
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


        <div className='divImagenPre' id="indice7">
          <video className="videoPre"  controls>
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




























      <footer className='divFooterPre'>
        <span>Proyecto Full-Stack gestión bancaria</span>
        <img className="imgIcoPre" src='java.png'></img>
        <label className='etiIcoPre'>JavaFX</label>
        <img className="imgIcoPre" src="mysql.png"></img>
        <img className="imgIcoPre" src="jasper.png"></img>
        <img className="imgIcoPre" src="scene.png"></img>
        </footer>

    </div>
  )
}

export default Presu