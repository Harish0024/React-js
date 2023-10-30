import './App.css';
import {useState} from 'react';


function App(props) {
 // console.log(process.argv[0]);
 //use this line in indexedDB.js//<AboutUs CompanyName="GAVS Tech" Address="Chennai"/>
   // <App firstname="Harish" lastname="V" address="Chennai" visitingtime="11"name="abc"/>
  //console.log(process.argv[1]);
  //console.log(process.argv[2]);
  //console.log("you have passed a total of"+process.argv.length+"parametaers")
  //{
 //   <input id='a' type="text"/>
  //}
 // var val=document.getElementById("a");
  //if(val!=prompt.name)
  var username=prompt("enter name");
  if(props.name!==username){
 var today=new Date();
if(today.getHours()>=Number(props.visitingtime)){
  return (
    
    <div className="App">
      <center>
     <b>Welcome Mr/Ms</b>{props.firstname}&nbsp;
     {props.lastname}<br></br>
    
     </center>
    </div>
  );
}
else{
  return(<div>
    <center>
    <b>portal will be opened at {props.visitingtime}Am </b>
    </center></div>)
}
  }else
    return(<div>your account is blocked contact admin</div>)
  
}

export default App;
