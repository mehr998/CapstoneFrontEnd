import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Visualization from './pages/visualization';
import About from './pages/about';

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route path='/visualization' element={<Visualization/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
    </Router>
);
}
  
export default App;