import Navbar from "./components/Navbar.js";
import AboutMe from "./components/AboutMe.js";
import Projects from "./components/Projects.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import bgImage from "./assets/bg.jpg";
import ContactMe from "./components/ContactMe.js"

function App() {
  return (

    <div className = "bg-fixed" style={{backgroundImage: `url(${bgImage})` }}>
      <BrowserRouter>
        <Navbar/>
        <div class="pt-52 lg:pt-72 pb-40">
          
          <AboutMe/>
          <div class="pt-72 pl-5 xl:pl-20 2xl:pt-[400px]">
            <Projects/>
          </div>
          <div class="pt-40">
            <ContactMe/>
          </div>
          
          
        </div>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
