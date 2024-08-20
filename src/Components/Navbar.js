import React, { useContext } from 'react'
import logo from '../assets/benz-logo.svg'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
import { ThemeContext } from '../Contexts/ThemeContext'
import Switch from '@mui/material/Switch';



const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <div>
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', position: 'fixed', height:'50px'}}>
            <ul style={{display:'flex', alignItems:'center'}}>
                <li style={{listStyleType:'none', display: 'flex', alignItems: 'center', gap:'10px'}}>
                    <img src={logo} alt="insta" style={{height:'30px', width:'30px'}} />
                    <p style={{fontWeight:'bold', letterSpacing: '1px', fontSize:'20px'}}>Welcome</p>
                </li>
            </ul>
            <ul style={{display:'flex', gap:'20px', alignItems: 'center', paddingRight: '20px' }}>
                <li style={{listStyleType: 'none'}}>Home</li>
                <li style={{listStyleType: 'none'}}>About Us</li>
                <li style={{listStyleType: 'none'}}>Contact</li>

                <li style={{listStyleType: 'none'}} id='nav-hover'><Switch onChange={()=> toggleTheme()} checked={theme==='dark'}/></li>
  
                <li style={{listStyleType: 'none'}}>Notification</li>
            </ul>
        </div>



  
    </div>
  )
}

export default Navbar