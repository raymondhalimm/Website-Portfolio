import Navbar from "./components/Navbar.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <div class="pt-96 pb-40">
         
        <AboutMe/>
        <div class="pt-96 pl-20">
          <Projects/>
        </div>
        
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
