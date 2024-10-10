import React, {useState} from "react";
import Img from './guitar.jpg'
import Copy from './guitar copy.jpg'
const Handle=() =>{
    const[name,setName]=useState("WELCOME TO MY WEBSITE")
    const[image,setImage]=useState( Img)
    function change()
    {
        setName("HARITHA")
    }
    function old()
    {
        setName("WELCOME TO MY WEBSITE")
    }
    function newimg(){
        setImage(Img)
    }
    function oldimg(){
        setImage(Copy)
    }

    return(
        <div>
            <h2 onMouseEnter={change} onMouseLeave={old}>{name}</h2>
           <img src={image} alt="guitar" onMouseEnter={oldimg} onMouseLeave={newimg}/>
        </div>
    )
}
export default Handle;