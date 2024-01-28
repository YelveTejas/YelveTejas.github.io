import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import TechStack from './Components/TechStack/TechStack';
import Projects from './Components/Project/Projects';
import Contacts from './Components/Contacts';
import Experiance from './Components/Experiance';
import { ProgressBar } from './Components/Progressbar';

function App() {
  return (
    <div className="App">
     <Navbar id='nav-menu'/>
     <ProgressBar/>
     <Home id='home'/>
     <About id='about' />

     <TechStack id='skills'/>
     <Experiance id='experiance'/>
     <Projects id='projects'/>
     <Contacts id='contact'/>
    </div>
  );
}

export default App;
