import './App.css';
import Header from './components/header/Header';
import Landingpage from './components/landingpage/Landingpage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <h1>Hello Fettle User World!!</h1>
        <Header />
        <Landingpage />
        
        <div >
          <img src='/assets/redcross.jpg' className='app-image'/>
        </div>
        <Footer />
    </div>
  );
}

export default App;
