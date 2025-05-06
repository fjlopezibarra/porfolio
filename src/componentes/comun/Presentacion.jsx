import React from 'react'
import { useNavigate } from 'react-router-dom';
import MiDat from './MiDat';

const Presentacion = () => {

    let c1 = ""; let c2 = ""; let c3 = ""; let c4 = ""; let c5 = ""; let c6 = ""; let c7 = ""; let c8 = "";
    const navigator = useNavigate();
        
    obtenerClase()

    function obtenerClase() {
        if (sessionStorage.control == null || sessionStorage.control == "") {
            c1 = "cubo";
            c2 = "lg";
            c3 = "cara frontal";
            c4 = "cara posterior";
            c5 = "cara derecha";
            c6 = "cara izquierda";
            c7 = "cara arriba";
            c8 = "cara abajo";
            document.documentElement.style.setProperty('--rot', 2);
        } else {
            c1 = "cubo1";
            c2 = "lg1";
            c3 = "cara frontal1";
            c4 = "cara posterior1";
            c5 = "cara derecha1";
            c6 = "cara izquierda1";
            c7 = "cara arriba1";
            c8 = "cara abajo1";

        }
    }

    function comenzar() {
        if (sessionStorage.control == 1) {
            document.documentElement.style.setProperty('--rot', 0);
            return;
        }
        sessionStorage.control = 1;
        obtenerClase();
        navigator("#");
        
    }

    function reloj() {
        if (sessionStorage.control == 0) { return; }
        MiDat.controlReloj = 1;
        navigator("/reloj")
    }

    function come() {
        if (sessionStorage.control == 0) { return; }
        MiDat.controlCome = 1;
        navigator("/come")
    }

    function onlycar(){
        if (sessionStorage.control == 0) { return; }
        navigator("/onlycar")
    }

    function bancomar(){
        if (sessionStorage.control == 0) { return; }
        navigator("/bancomar")
    }

    function presu(){
        if (sessionStorage.control == 0) { return; }
        navigator("/presu")
    }

    function fotojav(){
        if (sessionStorage.control == 0) { return; }
        navigator("/fotojav")
    }



    return (
        <div id="cubo" className={c1} onClick={comenzar}>
            <div id="lg" className={c2}>Javier López</div>

            <div id="caraFrontal" className={c3} onClick={onlycar}>
                <div className='div0'>
                    <div className='div1'>
                        <img className="icoIma" src='java.png'></img>
                        <img className="icoIma" src="spring.png"></img>
                        <img className="icoIma" src="mysql.png"></img>
                        <label className='etiIma'>JPA</label>
                    </div>
                    <div className='div2'>
                        <img className="ima" src='logocoche.png'></img>
                        <label className='etit'>Onlycar</label>
                        <label className='etit'>Full Stack</label>
                        <label className='etit'>e-commerce</label>
                    </div>
                    <div className='div3'>
                        <img className="icoIma" src="htlm.png"></img>
                        <img className="icoIma" src="javascript.png"></img>
                        <img className="icoIma" src="css.png"></img>
                        <img className="icoIma" src="react.png"></img>
                        <label className='etiIma'>Axios</label>
                    </div>
                </div>
            </div>

            <div id="caraPosterior" className={c4} onClick={presu} >
                <div className='div0'>
                    <div className='div1'>
                        <img className="icoIma" src='java.png'></img>
                        <label className='etiIma'>JavaFX</label>
                        <img className="icoIma" src="mysql.png"></img>
                        <img className="icoIma" src="jasper.png"></img>
                    </div>
                    <div className='div2'>
                        <img className="ima" src='logopresu.png'></img>
                        <label className='etit'>Presu</label>
                        <label className='etit'>Back-End</label>
                        <label className='etit'>Gestión comercial</label>
                    </div>
                    <div className='div3'>
                    </div>
                </div>
            </div>

            <div id="caraDerecha" className={c5} onClick={fotojav}>
                <div className='div0'>
                    <div className='div1'>
                        <img className="icoIma" src='visualbasic.png'></img>
                        <label className='etiIma'>Sql</label>
                    </div>
                    <div className='div2'>
                        <img className="ima" src='logofoto.png'></img>
                        <label className='etit'>Fotojav</label>
                        <label className='etit'>Back-End</label>
                        <label className='etit'>Clasificación fotos</label>
                    </div>
                    <div className='div3'>
                    </div>
                </div>
            </div>

            <div id="caraIzquierda" className={c6} onClick={bancomar}>
                <div className='div0'>
                    <div className='div1'>
                        <img className="icoIma" src='java.png'></img>
                        <img className="icoIma" src="spring.png"></img>
                        <img className="icoIma" src="mysql.png"></img>
                        <label className='etiIma'>JPA</label>
                    </div>
                    <div className='div2'>
                        <img className="ima" src='logobancomar.png'></img>
                        <label className='etit'>Bancomar</label>
                        <label className='etit'>Full Stack</label>
                        <label className='etit'>Gestión bancaria</label>
                    </div>
                    <div className='div3'>
                        <img className="icoIma" src="htlm.png"></img>
                        <img className="icoIma" src="javascript.png"></img>
                        <img className="icoIma" src="css.png"></img>
                        <img className="icoIma" src="react.png"></img>
                        <label className='etiIma'>Axios</label>
                    </div>
                </div>
            </div>

            <div id="caraArriba" className={c7} onClick={reloj}>
                <div className='div0'>
                    <div className='div1'>
                    </div>
                    <div className='div2'>
                        <img className="ima" src='reloj.png'></img>
                        <label className='etit'>Reloj</label>
                        <label className='etit'>Front-End</label>
                        <label className='etit'>Calendario</label>
                    </div>
                    <div className='div3'>
                        <img className="icoIma" src='htlm.png'></img>
                        <img className="icoIma" src="javascript.png"></img>
                        <img className="icoIma" src="css.png"></img>
                    </div>
                </div>
            </div>

            <div id="caraAbajo" className={c8} onClick={come}>
                <div className='div0'>
                    <div className='div1'>
                    </div>
                    <div className='div2'>
                        <img className="ima" src='logocome.ico'></img>
                        <label className='etit'>Comecocos</label>
                        <label className='etit'>Front-End</label>
                        <label className='etit'>Juego</label>
                    </div>
                    <div className='div3'>
                        <img className="icoIma" src='htlm.png'></img>
                        <img className="icoIma" src="javascript.png"></img>
                        <img className="icoIma" src="css.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Presentacion