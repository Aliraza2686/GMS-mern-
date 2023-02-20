
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import TestPage from './pages/TestPage'
import Login from './pages/Login'
function App() {
  return (
    <div className="main">
       <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/test/page' element={ <TestPage /> } />
          <Route path='/login' element={ <Login /> } />
       </Routes>
    </div>
  )
}

export default App
