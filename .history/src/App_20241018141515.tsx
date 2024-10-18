
//Importar los estilos de bootstrap7

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Home from './pages/Home';




function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}  />
      </Routes>
   
    </>
  )
}

export default App
