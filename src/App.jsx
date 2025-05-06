import './Principal.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './componentes/paginaprincipal/Principal'
import Reloj from './componentes/reloj/Reloj'
import Come from './componentes/come/Come'
import ComePag from './componentes/come/ComePag'
import Onlycar from './componentes/onlycar/Onlycar'
import Bancomar from './componentes/bancomar/Bancomar'
import Presu from './componentes/presu/Presu'
import Fotojav from './componentes/fotojav/Fotojav'

function App() {



  return (
    <>
      <BrowserRouter>
        
        <Routes>
          
          <Route path='/' element={<Principal />}></Route>          
          <Route path='/reloj' element={<Reloj />}></Route>
          <Route path='/come' element={<Come />}></Route>
          <Route path='/comepag' element={<ComePag />}></Route>
          <Route path='/onlycar' element={<Onlycar />}></Route>
          <Route path='/bancomar' element={<Bancomar />}></Route>
          <Route path='/presu' element={<Presu />}></Route>
          <Route path='/fotojav' element={<Fotojav />}></Route>

        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
