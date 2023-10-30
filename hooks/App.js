

import {useState,useEffect} from 'react';

function App() {
  

  const[visitorcount,setvisitorcount]=useState(
    localStorage.visitorcount!==undefined?
    Number(localStorage.visitorcount):1);
  const dispalyfn=()=>{
    
    console.log('visitor no is incremented'+visitorcount); 
  }

  useEffect(dispalyfn,[visitorcount]);
  //this arrow fn will be executed in alll three phases mounting,unmounting and updating
  //observer is introduced when ever visitor is clicked it gives a message

  const updatevisitorcount=()=>{
   // localStorage.setItem("visitors",visitorcount);
    setvisitorcount(visitorcount+1);
    
  }
  return (
    <div className="App">
     <form>
      <input type='button' onClick={updatevisitorcount} value='visitors count'/>
      <b>Your token number is #</b> {visitorcount}
      
     </form>
    </div>
  );
}

export default App;
