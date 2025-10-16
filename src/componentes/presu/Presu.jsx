import React, { useEffect, useState } from 'react'
import '../../StylePresu.css'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'bootstrap'

const Presu = () => {

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
    document.documentElement.style.setProperty('--tLetPre', tPorcentaje);
    document.documentElement.style.setProperty('--tLet1Pre', tPorcentaje1);
    document.documentElement.style.setProperty('--tLet2Pre', tPorcentaje2);
    document.documentElement.style.setProperty('--tAltoPre', tAltoPre);
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
                  <button className='botonAAPre' onClick={() => irItem("indice1")}>Título</button>
                  <button className='botonAAPre' onClick={() => irItem("indice2")}>Descripción</button>
                  <button className='botonAAPre' onClick={() => irItem("indice3")}>Herramientas</button>
                  <button className='botonAAPre' onClick={() => irItem("indice4")}>Objetivo para compras</button>
                  <button className='botonAAPre' onClick={() => irItem("indice5")}>Objetivo para ventas </button>
                  <button className='botonAAPre' onClick={() => irItem("indice6")}>Objetivo para Mano de obra</button>
                  <button className='botonAAPre' onClick={() => irItem("indice7")}>Compilación</button>
                  <button className='botonAAPre' onClick={() => irItem("indice8")}>Ver video</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="paginaPre" className='paginaPre'  >

        <div className='divImagenPre' id="indice1">
          <img className='imagenPre' src='recursospresu/fotopresu1.png'></img>
        </div>
        <div className='divLetraPre'>
          <h1 className='tituloPre'>Título</h1>
          <p className='tituloLetraPre'>
            Presu Gestión Comercial.
            <br></br>
          </p>
        </div>

        <div className='divImagenPre' id="indice2">
          <img className='imagenPre' src='recursospresu/fotopresu2.png'></img>
        </div>
        <div className='divLetraPre'>
          <h1 className='tituloPre'>Descripción</h1>
          <p className='tituloLetraPre'>
            Aplicación completa para la gestión comercial de empresas de la construcción y empresas instaladoras de electricidad, fontaneria, etc.
            <br></br>
            Aplicación integramente desarrollada por mi.
          </p>
        </div>

        <div className='divImagenPre' id="indice3">
          <img className='imagenPre' src='recursospresu/fotopresu3.png'></img>
        </div>
        <div className='divLetraPre'>
          <h1 className='tituloPre'>Herramientas</h1>
          <p className='tituloLetraPre'>
            <img className="imgIco1Pre" src="mysql.png"></img>Base de datos MySQL.<br />
            <img className="imgIco1Pre" src="java.png"></img>Lenguaje JavaFX.<br />
            <img className="imgIco1Pre" src="scene.png"></img>Escenas creadas con SceneBuilder.<br />
            <img className="imgIco1Pre" src="jasper.png"></img>Informes creados con Jaspersoft.<br />

          </p>
        </div>

        <div className='divImagenPre' id="indice4">
          <img className='imagenPre' src='recursospresu/fotopresu4.png'></img>
        </div>
        <div className='divLetraPre'>
          <h1 className='tituloPre'>Objetivo para compras</h1>
          <p className='tituloLetraPre'>
            -Circuito de compras.<br />
            -Creación de pedidos automaticos a partir del presupuesto de venta.<br />
            -Alerta de precio superior al ofertado en el presupuesto de venta.<br />
            -Albarán de compra automático a partir del pedido de compra.<br />
            -Control de la cantidad pendiente de recibir.<br />
            -Actualización automática de los precios de los artículos y compuestos.
            
          </p>
        </div>

        <div className='divImagenPre' id="indice5">
          <img className='imagenPre' src='recursospresu/fotopresu5.png'></img>
        </div>
        <div className='divLetraPre'>
          <h1 className='tituloPre'>Objetivo para ventas</h1>
          <p className='tituloLetraPre'>
            -Certificaciones de obra a origen.<br />
            -Certificación manual o por %.<br />
            -Impresión de las certificaciones para envío al cliente.<br />
            -Factura automática a partir de la certificación.<br />
            -Control de la cantidad a origen anterior.<br />
            -% de retención en factura.<br />
            -Balance desglosado del presupuesto .<br />
            -Balance real de costes y facturación del presupuesto.
          </p>
        </div>

        <div className='divImagenPre' id="indice6">
          <img className='imagenPre' src='recursospresu/fotopresu6.png'></img>
        </div>
        <div className='divLetraPre'>
          <h1 className='tituloPre'>Objetivo para mano de obra</h1>
          <p className='tituloLetraPre'>
            -Fichero de Personal.<br />
            -Altas, bajas, categorias, departamentos.<br />
            -Partes de trabajo.<br />
            -Resumen de partes de trabajo por mes y dia.<br />
            -Aplicación de los costes al presupuesto.<br />
          </p>
        </div>

        <div className='divImagenPre' id="indice7">
          <img className='imagenPre' src='recursospresu/fotopresu7.png'></img>
        </div>
        <div className='divLetraPre'>
          <h1 className='tituloPre'>Compilación</h1>
          <p className='tituloLetraPre'>
            Para el desarrollo de la aplicación he usado:<br />
            - IDE VSCode<br />
            - Maven<br />
          </p>
        </div>

























        <div className='divVideoPre' id="indice8">
          <video className="videoPre" controls>
            <source src="/recursospresu/videopresu1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>






      </div>







































      <footer className='divFooterPre'>
        <span>Proyecto gestión comercial para empresas instaladoras</span>
        <img className="imgIcoPre" src='java.png'></img>
        <span className='etiIcoPre'>JavaFX</span>
        <img className="imgIcoPre" src="scene.png"></img>
        <img className="imgIcoPre" src="mysql.png"></img>
        <img className="imgIcoPre" src="jasper.png"></img>
      </footer>

    </div>
  )
}

export default Presu

























