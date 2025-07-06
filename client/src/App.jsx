import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Compiler from './components/Compiler.jsx'
import Upload from './pages/Upload.jsx'
import Registry from './pages/Registry.jsx'
import Compare from './pages/Compare.jsx'
import About from './pages/About.jsx'
// import Visualize from './pages/Visualize.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Compiler}>
          <Route path='home' Component={Home}></Route>
          <Route path='upload' Component={Upload}></Route>
          <Route path='registry' Component={Registry}></Route>
          <Route path='compare' Component={Compare}></Route>
          <Route path='about' Component={About}></Route>
          {/* <Route path='visualize' Component={Visualize}></Route> */}

        </Route>
      </Routes>
    </Router>
  )
}

export default App
