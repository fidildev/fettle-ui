import './App.css';
import Landingpage from './components/landingpage/Landingpage';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NotFound from './components/notfound/NotFound';
import Logout from './components/logout/Logout';

function App() {
  const user =false
  return (
    <BrowserRouter>
      <div>
          <Navbar />
            <Routes>
              <Route path='/' element={<Landingpage />} />
              <Route path='/login' element={user? <Navigate to ='/' />: <Login />} />
              <Route path='/logout' element={ <Logout />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
