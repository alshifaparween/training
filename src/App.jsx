import {Route, Routes} from 'react-router-dom';
import './App.css';






import Navbar  from "../src/components/header/Navbar.jsx";
import BookingEngines from '../src/components/header/BookingEngines.jsx'
import Footer from './components/header/Footer.jsx';
// import Homepage from './components/header/Homepage.jsx';
import Homebanner from './components/header/Homebanner.jsx';
import Enginespage1 from './components/header/pages/Enginespage1.jsx';
import Enginespage2 from './components/header/pages/Enginespage2.jsx';
import Enginespage3 from './components/header/pages/Enginespage3.jsx';
import Enginespage4 from './components/header/pages/Enginespage4.jsx';
import HireDeveloperPage from './components/header/HireDeveloperPage.jsx';
function App() {
  return (
    <>
    
        {/* <Navbar/> */}
        <Routes>
        <Route path="*" element={<Navbar />} />
      </Routes>

<Routes>
  <Route path='/booking-engine-development' element={<BookingEngines/>} />
</Routes>

      <Routes>
        <Route path="/footer" element={<Footer />} />
      </Routes>

      <Routes>
        <Route path="/home" element={<HireDeveloperPage />} />
      </Routes>

  
  
      <Routes>
        <Route path="/homepage" element={<Homebanner />} />
      </Routes>

      <Routes>
        <Route path="/homepg1" element={<Enginespage1 />} />
      </Routes>

      <Routes>
        <Route path="/homepg2" element={<Enginespage2 />} />
      </Routes>

      <Routes>
        <Route path="/homepg3" element={<Enginespage3 />} />
      </Routes>

      <Routes>
        <Route path="/homepg4" element={<Enginespage4 />} />
      </Routes>

   



      </>
    
  );
}

export default App;
