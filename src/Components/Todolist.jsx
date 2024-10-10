import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
const Todolist = () => {
    const [todo,setTodo]=useState(' ');
    const [name,setName]=useState(' ');
    const [db,setDb]=useState([]);
    function datapost(){
   axios.post(" http://localhost:3000/posts",{todo,name})
   .then(()=>{
   
    alert("data has been posted")
   })
   .catch(()=>{
    alert("data has not been posted")
   })}
   function getdata(){
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setDb(res.data)
      alert("data has been retrived")
    })
    .catch(()=>{
      
      alert("data has not been retrived")
    })
   }
   function updatedata(id,data){
    axios.put(`http://localhost:3000/posts/${id}`,{todo:data},{name:data})
    .then(()=>{
      console.log("data updated");
      getdata();
    })
    .catch(()=>{
      console.log("data cannot update");
    })
   }
   function newdata(id){
    const data=prompt("Enter new data")
    updatedata(id,data);
   }
   function remove(id,data){
    axios.delete(`http://localhost:3000/posts/${id}`,{todo:data},{name:data})
    .then(()=>{
      console.log("data deleted");
      getdata();
    })
    .catch(()=>{
      console.log("data cannot be deleted");
    })
  }
    
    console.log(db)
  return (
    <div>
        <p>
            {name}
        </p>

  <TextField 
id="outlined-basic"
 label="Name" 
 variant="outlined"  
 value={name}
  onChange={(ref)=> setName(ref.target.value)}
  />
  <br/>
  <p>{todo}</p>
  <TextField 
id="outlined-basic"
 label="Rollno" 
 variant="outlined"  
 value={todo}
  onChange={(ref)=> setTodo(ref.target.value)}
  />
  
  <br/>
    <p>
        <Button variant="contained" onClick={datapost}>POST</Button>
        </p>
        
        <p>
        <Button variant="contained" onClick={getdata}>GET</Button>
        </p>
        <div>
          <ul>
            {
              db.map((item)=>(
                <li key={item.id}> {item.name} {item.todo}
                <button onClick={()=>newdata(item.id)}>Edit</button>
                <button onClick={()=>remove(item.id)}>Delete</button>
                </li>
                
              ))
            }
            </ul>
           
          
        </div>
        </div> 
   

  )
}

export default Todolist;