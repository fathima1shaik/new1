import React from 'react';
// import Dummy from './practice/practice'
import Nav from './practice/nav.jsx';
import Home from './practice/practice.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './practice/contact.jsx';
import About from './practice/about.jsx';
// import Team from './practice/team.jsx';


function App() {
  return (
    <div>
      
   <BrowserRouter>

        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          {/* <Route path='/Team' element={<Team/>} /> */}
        </Routes>
       
      </BrowserRouter>
     
    </div>
  );
}

export default App;
