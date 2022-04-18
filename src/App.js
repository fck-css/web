import './App.css';
import react from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div id="page-container">
        <div id="content-wrap">
          <Navbar />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
