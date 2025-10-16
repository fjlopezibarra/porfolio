import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MiDat from './MiDat';

const Presentacion = () => {

    useEffect(() => {
        window.addEventListener('resize', ajustar);

        const intervalo = setInterval(() => {
            moverReloj();
        }, 1000);

        return () => clearInterval(intervalo);

    }, []);

    let c0 = ""; let c1 = ""; let c2 = ""; let c3 = ""; let c4 = ""; let c5 = ""; let c6 = ""; let c7 = ""; let c8 = ""; let c9 = "";
    const navigator = useNavigate();

    obtenerClase()

    function obtenerClase() {
        if (sessionStorage.control == null || sessionStorage.control == "") {
            c0 = "containerIn";
            c1 = "cubo";
            c2 = "lg";
            c3 = "cara frontal";
            c4 = "cara posterior";
            c5 = "cara derecha";
            c6 = "cara izquierda";
            c7 = "cara arriba";
            c8 = "cara abajo";
            c9 = "come"
            document.documentElement.style.setProperty('--rot', 2);
        } else {
            c0 = "container";
            c1 = "cubo1";
            c2 = "lg1";
            c3 = "cara frontal1";
            c4 = "cara posterior1";
            c5 = "cara derecha1";
            c6 = "cara izquierda1";
            c7 = "cara arriba1";
            c8 = "cara abajo1";
            c9 = "come1"
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

    function onlycar() {
        if (sessionStorage.control == 0) { return; }
        navigator("/onlycar")
    }

    function mensaweb() {
        if (sessionStorage.control == 0) { return; }
        navigator("/mensaweb")
    }

    function bancomar() {
        if (sessionStorage.control == 0) { return; }
        navigator("/bancomar")
    }

    function presu() {
        if (sessionStorage.control == 0) { return; }
        navigator("/presu")
    }

    function fotojav() {
        if (sessionStorage.control == 0) { return; }
        navigator("/fotojav")
    }

    function curriculum() {
        if (sessionStorage.control == 0) { return; }
        navigator("/curriculum")
    }

    const ancho = 1366;

    ajustar();

    function ajustar() {
        let ventana = window.innerWidth / ancho;
        document.documentElement.style.setProperty('--ventana', ventana);
        let tPosiCubo = 683 * ventana - 140 + "px";
        document.documentElement.style.setProperty('--tPosiCubo', tPosiCubo);
    }


    function moverReloj() {
        let hora = new Date();
        let h = hora.getHours();
        let m = hora.getMinutes();
        let s = hora.getSeconds();
        if (h * 1 > 12) { h = h - 12; }
        let anguloh = h * 360 / 12;
        let angulom = m * 360 / 60;
        let angulos = s * 360 / 60;
        angulom += angulos / 60;
        anguloh += angulom / 12;

        document.documentElement.style.setProperty('--h1', (anguloh + "deg"));
        document.documentElement.style.setProperty('--m1', (angulom + "deg"));
        document.documentElement.style.setProperty('--s1', (angulos + "deg"));
    }






    return (
        <div className='panta'>

            <div id="cubo" className={c1} onClick={comenzar}>
                <div id="lg" className={c2}>Javier López</div>

                <div class={c0}>
                    <div class="box">
                        <span></span>
                        <div class="content">
                            <h2>Javier López</h2>
                            <p>Desarrollador full-stack</p>
                            <button className='botonCur' onClick={curriculum}>+ info</button>
                        </div>
                    </div>
                </div>


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
                            <label className='etiIma1'>JavaFX</label>
                            <img className="icoIma5" src="scene.png"></img>
                            <img className="icoIma" src="mysql.png"></img>
                            <img className="icoIma5" src="jasper.png"></img>
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
                            <img className="icoIma" src='sql.png'></img>                            
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
                            <img className='agus' src='AGUS.png'></img>
                            <img className='agum' src='AGUM.png'></img>
                            <img className='aguh' src='AGUH.png'></img>
                            <img className='centro' src='BOTON.png'></img>
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

                <div id="caraAbajo" className={c8} onClick={mensaweb}>
                    <div className='div0'>
                        <div className='div1'>
                            <img className="icoIma" src='java.png'></img>
                            <img className="icoIma" src="spring.png"></img>
                            <img className="icoIma" src="mysql.png"></img>
                            <label className='etiIma'>JPA</label>
                        </div>
                        <div className='div2'>
                            <img className="ima" src='mensaweb.png'></img>
                            <label className='etit'>MensaWeb</label>
                            <label className='etit'>Full Stack</label>
                            <label className='etit'>Envío de mensajes</label>
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

                <div class={c9}>
                    <button className='botonCurC' onClick={come}>Pac-man</button>
                </div>


            </div>
        </div>
    )

}

export default Presentacion