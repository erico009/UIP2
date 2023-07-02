
import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Menu from './Menu';
import Checkout from './Checkout';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <h1>App content</h1>
          <Routes>
          <Route exact path ='/Home' element={<Home />}/>
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Checkout' element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
