import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/main/Main';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
