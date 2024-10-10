import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <div className='navbar'>
        <nav>
            <ul>
               <Link to={"/"}><li >Home</li></Link> 
                <Link to={'/contact'}><li>Contact</li></Link>
                <Link to={'work'}><li>Work</li></Link>
                
                <Link to={'/about'}><li>About</li></Link>
            </ul>
        </nav>
        </div>
    </div>
  )
}

export default Navigation