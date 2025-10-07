
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/partials/Footer'
import Home from './pages/Home'
import Admin from './pages/admin'
import Navbar from './components/partials/Navbar'
function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
