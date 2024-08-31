import logo from './logo.svg';
import './App.css';
import Pagelayout from './components/Pagelayout';
import React from 'react';

import { router, Routes, Route, Switch, Link } from 'react-router-dom';


import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">

{/* <Pagelayout>
<Routes>
<div> */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> */}
            {/* </li>
            <li>
              <Link to="/about">About</Link>
            </li> */}
            {/* <li> */}
              {/* <Link to="/contact">Contact</Link> */}
            {/* </li> */}
          {/* </ul> */}
        {/* </nav> */}
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch> */}
      {/* </div> */}
        {/* </Routes> */}
{/* </Pagelayout>  */}
     <>
     
     <HeroSection></HeroSection>
     
     </>
    </div>
    

    
  );
}

export default App;
