import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './views/Register/Register';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Profile from './views/Profile/Profile';
import { useAuthContext } from './contexts/AuthContext/AuthContext';
import ProtectedRoute from './guard/ProtectedRoute';
import Toast from './components/Toast/Toast';
import UnprotectedRoute from './guard/UnprotectedRoute';
import Flexbox from './views/Flexbox/Flexbox';
import BoxShadow from './views/BoxShadow/BoxShadow';
import Grid from './views/Grid/Grid';
import Gradient from './views/Gradient/Gradient';
import NotFound from './components/NotFound/NotFound';
import Tools from './views/Tools/Tools';
import Spinner from './components/Spinner/Spinner';

function App() {
  const { isAuthenticationFetched, toast } = useAuthContext()

  return (
    <div className="App">
      <div id="page-container">
          <Navbar />

          <div id="content-wrap">
            {!isAuthenticationFetched ? 
            <Spinner />
            :
            <Routes>

              <Route element={<UnprotectedRoute />}>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />} />
              </Route>

              <Route path="/" element={<Home />}/>
              <Route path="/tools" element={<Tools />} />
              <Route path="/box-shadow" element={<BoxShadow />} />
              <Route path="/gradient" element={<Gradient />} />
              <Route path="/box-shadow" element={<BoxShadow />} />
              <Route path="/flexbox" element={<Flexbox />} />
              <Route path="/grid" element={<Grid />} />
              <Route path="*" element={<NotFound />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
            }
          </div>
          {toast && <Toast type={toast.type}>{toast.message}</Toast>}
          <Footer />
      </div>
    </div>
  );
}

export default App;
