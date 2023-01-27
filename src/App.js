import './App.css';
import Header from './components/header/Header';
import Landingpage from './components/landingpage/Landingpage';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <h1>Hello Fettle User World!!</h1>
        <Header />
        <div className='app-container'>
          <Sidebar />
          <Landingpage />
         
        </div>
        <Footer />
    </div>
  );
}

export default App;
