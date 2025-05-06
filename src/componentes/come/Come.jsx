import React from 'react'
import '../../StyleCome.css'
import { useNavigate } from 'react-router-dom'
import MiDat from '../comun/MiDat'

const Come = () => {

  const navigator = useNavigate();

  function jugar() {
    if (sessionStorage.control == 0) { return; }
    MiDat.controlCome = 1;
    navigator("/comepag")
  }

  function salir() {
    navigator("/");
  }

  return (
    <div >
      <div className='pagina1'>
        <div className='divGeneral'>
          <button className='bGeneral' onClick={jugar}>Jugar</button>
          <button className='bGeneral' onClick={salir}>Salir</button>
        </div>
      </div>
    </div>
  )
}

export default Come