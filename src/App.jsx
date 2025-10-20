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
import Curriculum from './componentes/curriculum/curriculum'
import Mensaweb from './componentes/mensaweb/Mensaweb'

function App() {



  return (
    <>
      <BrowserRouter basename="/porfolio/">
        
        <Routes>
          
          <Route path='/' element={<Principal />}></Route>          
          <Route path='/reloj' element={<Reloj />}></Route>
          <Route path='/come' element={<Come />}></Route>
          <Route path='/comepag' element={<ComePag />}></Route>
          <Route path='/onlycar' element={<Onlycar />}></Route>
          <Route path='/mensaweb' element={<Mensaweb />}></Route>
          <Route path='/bancomar' element={<Bancomar />}></Route>
          <Route path='/presu' element={<Presu />}></Route>
          <Route path='/fotojav' element={<Fotojav />}></Route>
          <Route path='/curriculum' element={<Curriculum />}></Route>

        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
