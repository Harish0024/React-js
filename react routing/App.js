
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';

import About from './About';
import Contact from './Contact';
import Registration from './Registration';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
     
     <Routes>
      <Route>
      
     
        <Route path='home' element={<Home/>}/>
        <Route path='Contact' element={<Contact/>}/>
          <Route path='Registration' element={<Registration/>}/>
          <Route  path='About' element={<About/>}/>
          </Route>    
               
           
     
     </Routes>
     <div>
            
            <Link to="/Home">Home</Link>&nbsp;&nbsp;
            <Link to="/Contact">Contact Us</Link>&nbsp;&nbsp;
            <Link to="/About">About</Link>&nbsp;&nbsp;
            <Link to="/Registration">Registration</Link>
      </div>    
     </BrowserRouter>
    </div>
  );
}

export default App;
