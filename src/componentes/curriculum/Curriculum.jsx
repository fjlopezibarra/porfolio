import React, { useEffect, useState } from 'react'
import '../../StyleCurriculum.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';


const Curriculum = () => {

    const navigator = useNavigate();
    const [icono, setIcono] = useState(true);
    const [frase, setFrase] = useState("");
    const [pagina, setPagina] = useState(1);
    const [clase, setClase] = useState("btp1");
    const ancho = 1366;

    useEffect(() => {
        window.addEventListener('resize', ajustar);
        if (pagina == 1) {
            document.documentElement.style.setProperty('--foto1', 0);
            document.documentElement.style.setProperty('--foto2', 1);
        }
    }, []);

    ajustar();

    function ajustar() {
        let escala = window.innerWidth / ancho;
        document.documentElement.style.setProperty('--escala', escala);
    }



    function retroceder() {
        let pag = pagina;
        if (pag == 1) { return; }
        let id1 = pag - 1;
        let id2 = pag;
        let id3 = pag + 1;
        pag--
        setPagina(pag)
        document.getElementById("cuadroA" + id1).style = "transform: rotateY(180deg); opacity: 1";
        document.getElementById("cuadroA" + id2).style = "opacity: 1";
        document.getElementById("cuadroA" + id3).style = "opacity: 0";
        irPagina(pag, 0);
    }

    function retroceder1(pag) {
        if (pag == 1) { return; }
        let id1 = pag - 1;
        let id2 = pag;
        let id3 = pag + 1;
        pag--
        document.getElementById("cuadroA" + id1).style = "transform: rotateY(180deg); opacity: 1";
        document.getElementById("cuadroA" + id2).style = "opacity: 1";
        document.getElementById("cuadroA" + id3).style = "opacity: 0";
        irPagina(pag, 0);
    }


    function avanzar() {
        let pag = pagina;
        if (pag == 9) { return; }
        pag++
        setPagina(pag);
        let id1 = pag - 1;
        let id2 = pag;
        let id3 = pag + 1;
        document.getElementById("cuadroA" + id1).style = "transform: rotateY(180deg); opacity: 0";
        document.getElementById("cuadroA" + id2).style = "transform: rotateY(180deg); opacity: 1";
        document.getElementById("cuadroA" + id3).style = "opacity: 1";
        irPagina(pag, 0);
    }

    function avanzar1(pag) {
        if (pag == 9) { return; }
        pag++
        let id1 = pag - 1;
        let id2 = pag;
        let id3 = pag + 1;
        document.getElementById("cuadroA" + id1).style = "transform: rotateY(180deg); opacity: 0";
        document.getElementById("cuadroA" + id2).style = "transform: rotateY(180deg); opacity: 1";
        document.getElementById("cuadroA" + id3).style = "opacity: 1";
        irPagina(pag, 0);
    }

    function irPagina(pag, v) {
        if (pag == 1) {
            document.documentElement.style.setProperty('--foto1', 0);
            document.documentElement.style.setProperty('--foto2', 1);
        } else {
            document.documentElement.style.setProperty('--foto1', 1);
            document.documentElement.style.setProperty('--foto2', 0);
        }
        setClase("btp");
        let pagx = "btp" + pag;
        cambiarColor(pagx);
        if (v == 1) { cambiarPagina(pag) };
    }

    function cambiarColor(ind) {
        for (let i = 1; i < 10; i++) {
            document.getElementById("btp" + i).style = "background-color: none"
        }
        document.getElementById(ind).style = "background-color: rgba(0,100,100,1)"
    }

    function cambiarPagina(ind) {
        let p = ind - pagina;
        if (p > 0) {
            for (let i = pagina; i < ind; i++) {
                avanzar1(i);
            }
        } else {
            for (let i = pagina; i > ind; i--) {
                retroceder1(i);
            }
        }
        setPagina(ind);
    }

    function salir() {
        navigator("/");
    }

    function cambiarIcono() {
        setIcono(!icono);
    }

    function poneFrase(ind) {
        switch (ind) {
            case 1: setFrase("Datos personales"); break;
            case 2: setFrase("Introducción"); break;
            case 3: setFrase("Perfil profesional"); break;
            case 4: setFrase("Experiencia"); break;
            case 5: setFrase("Formación"); break;
            case 6: setFrase("Conocimientos"); break;
            case 7: setFrase("Habilidades"); break;
            case 8: setFrase("Idiomas"); break;
            case 9: setFrase("Otros Datos"); break;
            default: break;
        }
    }

    function quitaFrase() {
        setFrase("");
    }

    function abrirGit(){
        window.open('https://github.com/fjlopezibarra', '_blank');
    }


    return (
        <div className='pantaCurri'>

            <div className='libro'>

                <div id="cuadroA1" className='paginaLibro tipo1' ></div>

                <div id="cuadroA2" className='paginaLibro tipo2' >
                    <p className='titulo'>Datos Personales</p>
                    <div className='foto1'></div>
                    <img className='foto2' src="recursoscurri/fotocur.jpg"></img>
                    <div className='divEs1'>
                        <p className='es1'>Nombre: Francisco Javier López-Ibarra Castañeda</p>
                        <p className='es1'>Dirección: C/ Modelo nº 8</p>
                        <p className='es1'>CP: 41340</p>
                        <p className='es1'>Población: Tocina</p>
                        <p className='es1'>Provincia: Sevilla</p>
                        <p className='es1'>Movil: 657 09 43 42</p>
                        <p className='es1'>E-mail: fjlopezibarra@gmail.com</p>
                        <p className='es1Git' onClick={abrirGit}>Github: //github.com/fjlopezibarra</p>
                        <p className='nPag'>Pág: 1</p>
                        
                    </div>



                </div>

                <div id="cuadroA3" className='paginaLibro tipo3' >
                    <p className='es1'>Pagina 2 Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.</p>
                </div>

                <div id="cuadroA4" className='paginaLibro tipo3' >
                    <p className='es1'>Pagina 3 Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.</p>
                </div>

                <div id="cuadroA5" className='paginaLibro tipo3' >
                    <p className='es1'>Pagina 4 Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.</p>
                </div>

                <div id="cuadroA6" className='paginaLibro tipo3' >
                    <p className='es1'>Pagina 5 Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.</p>
                </div>

                <div id="cuadroA7" className='paginaLibro tipo3' >
                    <p className='es1'>Pagina 6 Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.</p>
                </div>

                <div id="cuadroA8" className='paginaLibro tipo3' >
                    <p className='es1'>Pagina 7 Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.</p>
                </div>

                <div id="cuadroA9" className='paginaLibro tipo3' >
                    <p className='es1'>Pagina 8 Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.</p>
                </div>

                <div id="cuadroA10" className='paginaLibro tipo3' >
                    <p className='es1'>Pagina 9 Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.Esto es una escritura de ejemplo aaa en lo alto de la casa hay una chimenea.</p>
                </div>

                <button className='botonLib ret' onClick={retroceder}>
                    <img src='recursos/izquierda.png'></img>
                </button>
                <button className='botonLib ava' onClick={avanzar}>
                    <img src='recursos/derecha.png'></img>
                </button>

                <div className='paginacion'>
                    <p id="btp1" className={clase} onMouseEnter={() => poneFrase(1)} onMouseLeave={quitaFrase} onClick={() => irPagina(1, 1)}>1</p>
                    <p id="btp2" className='btp' onMouseEnter={() => poneFrase(2)} onMouseLeave={quitaFrase} onClick={() => irPagina(2, 1)}>2</p>
                    <p id="btp3" className='btp' onMouseEnter={() => poneFrase(3)} onMouseLeave={quitaFrase} onClick={() => irPagina(3, 1)}>3</p>
                    <p id="btp4" className='btp' onMouseEnter={() => poneFrase(4)} onMouseLeave={quitaFrase} onClick={() => irPagina(4, 1)}>4</p>
                    <p id="btp5" className='btp' onMouseEnter={() => poneFrase(5)} onMouseLeave={quitaFrase} onClick={() => irPagina(5, 1)}>5</p>
                    <p id="btp6" className='btp' onMouseEnter={() => poneFrase(6)} onMouseLeave={quitaFrase} onClick={() => irPagina(6, 1)}>6</p>
                    <p id="btp7" className='btp' onMouseEnter={() => poneFrase(7)} onMouseLeave={quitaFrase} onClick={() => irPagina(7, 1)}>7</p>
                    <p id="btp8" className='btp' onMouseEnter={() => poneFrase(8)} onMouseLeave={quitaFrase} onClick={() => irPagina(8, 1)}>8</p>
                    <p id="btp9" className='btp' onMouseEnter={() => poneFrase(9)} onMouseLeave={quitaFrase} onClick={() => irPagina(9, 1)}>9</p>
                </div>

                <div className='divHeaderCur'>
                    <button className='botonGeneralCur' onClick={salir} onMouseEnter={cambiarIcono} onMouseLeave={cambiarIcono}>
                        <img className="imaBotonGeneralCur" src={icono ? "recursos/home1.png" : "recursos/home2.png"} ></img>
                        Home
                    </button>
                </div>

                <p className='frase'>{frase}</p>


            </div>

        </div>
    )

}

export default Curriculum