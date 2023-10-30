import React from 'react';
import {useState,useEffect} from 'react';
const defaultdata={
    name:'sunflower',
    icon:'😍',
    size:40,
    about:[
        123,456,789
    ],
   

  }
function Growplants({plantdetail=defaultdata}){
    //const{plantdetail=defaultdata}=props
    let{name,size,icon,about}=plantdetail;
   
   
  
   
   
      const[dynamicsize,setdynamicsize]= useState(size) ;
      useEffect(()=>{
        //mounting at initial
        const interval=setInterval(()=>{
            if(dynamicsize<100)setdynamicsize(dynamicsize+5)
        },1000)
    //if we give in return it will be executed
        return()=>clearInterval(interval)
         console.log('dynamicsize changed',dynamicsize)},[dynamicsize]) //only one time will run
        if(dynamicsize>100){
            alert('plant grown dont water');
        }
      const handler=()=>{
        //console.log('clicked');
        //setdynamicsize=dynamicsize+20;
        setdynamicsize(dynamicsize+20)
      }
      //destruction of props
    
    
    return(
        <div>
        <h3>I am a {name}</h3>
        {
            name==='rose'?
            <div>👍</div>:
            <div></div>
        }
        <div>
            <span style={{fontSize:`${dynamicsize}px`}}>
                {icon}
                
            </span> 
            {about.map((i,index)=> <div key={index}>{index+1 }. {i}</div>)}
        </div>
        <button onClick={handler}>Give water to grow</button>
        </div>
    )
}
export default Growplants;