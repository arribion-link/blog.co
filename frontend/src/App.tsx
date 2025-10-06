
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Home from './pages/Home'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
