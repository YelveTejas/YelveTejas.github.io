import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import TechStack from './Components/TechStack/TechStack';
import Projects from './Components/Project/Projects';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <TechStack/>
     {/* <Projects/> */}
    </div>
  );
}

export default App;
