import React from 'react';

import Nav from './practice/nav.jsx';
import Home from './practice/practice.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './practice/contact.jsx';
import About from './practice/about.jsx';
import Team from './practice/team.jsx';




// import Dummy from './practice/practice'
// import Contact from './project1/contact.jsx';
// import Java from './project1/java.jsx';
// import About from './project1/about.jsx';
// import Aboutf from './project1/aboutf.jsx';

function App() {
  return (
    <div>
      
   <BrowserRouter>

        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/Team' element={<Team/>} />
  
        </Routes>
        
       
      </BrowserRouter>
      {/* <Contact/> */}
      {/* <Java /> */}
      {/* <About /> */}
      {/* <Aboutf /> */}

     
     
    </div>
  );
}

export default App;
