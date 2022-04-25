import './App.scss';
import react from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Register from './views/Register/Register';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Profile from './views/Profile/Profile';
import { useAuthContext } from './contexts/AuthContext/AuthContext';

function App() {
  const { isAuthenticationFetched } = useAuthContext()

  return (
    <div className="App">
      <div id="page-container">
          <Navbar />

          <div id="content-wrap">
            {!isAuthenticationFetched ? 
            <p>Loading...</p>
            :
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            }
          </div>

          <Footer />
      </div>
    </div>
  );
}

export default App;
