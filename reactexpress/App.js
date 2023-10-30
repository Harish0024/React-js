import {useEffect, useState} from 'react';
import axios from 'axios';
//var axios=new Axios();



function App() {
  const[data,setdata]=useState([]);
  const[userid,setuserid]=useState('');
  const[password,setpassword]=useState('');
  const[emailid,setemailid]=useState('');
  const updateuserid=(event)=>{
    setuserid(event.target.value);
  } 
  const updatepassword=(event)=>{
    setpassword(event.target.value);
  }
  const updateemail=(event)=>{
    setemailid(event.target.value);
  }

  const insertuser=()=>{
    axios.post("http://localhost:9901/Add",{id:userid,pass:password,emailid:emailid})
    .then(res=>console.log(res));
  }

  const updateuser=()=>{
    axios.post("http://localhost:9901/Update",{id:userid,pass:password,emailid:emailid})
    .then(res=>console.log(res));
  }

  const deleteuser = () => {
    axios.delete(`http://localhost:9901/delete?uid=${userid}`)
      .then(res => console.log(res));
    hello();
  };

  
useEffect(() => {
  
})
    const hello=()=>{
        fetch("http://localhost:9901/Getall").
    then(response=>response.json()).then(data=>{setdata(data)})
      };
        //console.log(data);

        const welcome=()=>{
          fetch("http://localhost:9901/Getall").
      then(response=>response.json()).then(data=>{setdata(data)})
        };

  return (  
   
    <div className="App" style={{marginTop:"100px",backgroundColor:"lightblue"}}>
        <h1>User database</h1>
        <input type='button' value="show" onClick={welcome}/>

        <form onSubmit={insertuser}>
          <center>
          Enter uid<input type="text" name="userid" value={userid} onChange={updateuserid}/><br/>
          enter password<input type="password" name="password" value={password} onChange={updatepassword}/><br/>
          enter email<input type="email" name="emailid" value={emailid} onChange={updateemail}/><br/>
          <input type="submit" value="Add" />&nbsp;
          <input type="button" value="update" onClick={updateuser}/>
          <input type='button' value="delete" onClick={deleteuser}/><br/>
          <input type='reset' value="reset"/>
          </center>
        </form>
        {
        data.map(item => (
          <ul key={item.userid}>
        <li >{item.userid},{item.password},{item.emailid}</li>
        </ul>
      ))}
      


      
    </div>
  
  );
        }

export default App;
 