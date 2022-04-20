import './App.scss';
import react from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Register from './views/Register/Register';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <div id="page-container">
        <div id="content-wrap">
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />}/>
            <Route path="/" element={<Home />}/>
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
