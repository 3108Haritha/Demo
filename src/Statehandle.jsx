import React, { useState }  from "react";
import Img from './guitar.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Hello.css'
const Statehandle = ()=>{
    const[like,setlike]=useState(0)
    
    function decrement(){
        if (like>=1){
        setlike((like-1))
        }
    }
    function reset(){
        setlike(0)
    }
    function message(){
        window.open('https://www.pexels.com/photo/person-playing-brown-guitar-1407322/')
       
    }
    
    return(
        <div>
             <div className="Mus">
            <img src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?cs=srgb&dl=pexels-42north-1407322.jpg&fm=jpg" alt="" />
             <button onClick={message}>Opensite</button>
                </div>
                <div className="buton">
                <p>
                    {like}
                   <center> <button onClick={()=>setlike(like+1)}>Like</button>
                    <button onClick={decrement}>Unlike</button>
                    <button onClick={reset}>Reset</button></center>
                </p>
                </div>
                
                <span onMouseOver={message}>
                    
               < ArrowForwardIcon/>
              
               </span>
               
             
            
        </div>
    )
}
export default Statehandle;