import React from 'react'
import MiDat from '../comun/MiDat';
import MiCome from './MiCome';


const ComePag = () => {
  let miCome;
  
  if (MiDat.controlCome == 1) {
    miCome = new MiCome()
    MiDat.controlCome = 0;
  }

  
  return (
    <div >
      
    </div>
  )
}

export default ComePag