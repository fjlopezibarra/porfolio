import React from 'react'
import MiReloj from './MiReloj'
import MiDat from '../comun/MiDat';


const Reloj = () => {
  let miReloj;
  
  if (MiDat.controlReloj == 1) {
    miReloj = new MiReloj()
    MiDat.controlReloj = 0;
  }

  
  return (
    <div >
      
    </div>
  )
}

export default Reloj