import React from "react";
import Navigation from "./Navigation/Navigation";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Work from './Components/Work';

//import Todolist from "./Components/Todolist";
import Handle from "./Handle.jsx";

import About from "./Components/About.jsx";


function App(){
  return(
    <div>
      
      <Router>
        <div>
        <Navigation/>
        
        
        </div>
        <div style={{padding:'50px'}}>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Work" element={<Work/>}/>
       
        <Route path="/about" element={<About/>}/>
        </Routes>
        </div>
      </Router>
    
   
     
    </div>
  )
}
export default App;