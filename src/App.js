
import React from 'react';
import { HashRouter as Router, Routes, Route }
    from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Menu from './Menu';
import Checkout from './Checkout';
import AboutUs from './AboutUs';
import TrackOrder from './TrackOrder';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path ='/' element={<Home />}/>
            <Route path ='/Home' element={<Home />}/>
            <Route path='/Menu' element={<Menu />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/TrackOrder' element={<TrackOrder />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
