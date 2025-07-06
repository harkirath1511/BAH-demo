import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Compiler from './components/Compiler.jsx';
import Upload from './pages/Upload.jsx';
import Registry from './pages/Registry.jsx';
import Compare from './pages/Compare.jsx';
import About from './pages/About.jsx';
import Visualize from './pages/Visualize.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Compiler />}>
          {/* Redirect / to /home */}
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='upload' element={<Upload />} />
          <Route path='registry' element={<Registry />} />
          <Route path='compare' element={<Compare />} />
          <Route path='about' element={<About />} />
          <Route path='visualize' element={<Visualize />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
