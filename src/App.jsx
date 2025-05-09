import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'

function App() {
 

  return (
   <div className='App'>
    <Navbar />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
   </div>
  )
}

export default App
