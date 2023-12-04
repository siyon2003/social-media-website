import React, { useContext } from 'react'
import { DarkContext } from '../../context/darkcontext'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import './Navbar.scss'

const Navbar = () => {
    const {cuser}=useContext(AuthContext);
    const {mode,toggle}=useContext(DarkContext);
  return (
    <div className={`navbar-${mode}`}> 
        <div className='left'>
        <Link to={'/'} style={{textDecoration:'none'}}><span>SiyoChat</span></Link>
        <HomeOutlinedIcon />
        {mode && mode==='light'?<DarkModeOutlinedIcon onClick={toggle} style={{cursor:'pointer'}}/>:<LightModeOutlinedIcon onClick={toggle} style={{cursor:'pointer'}}/>}
        <div className='search'>
        <SearchOutlinedIcon />
        <input type='text' placeholder='Search....'/>
        </div>
        </div>
        <div className='right'>
            <PersonOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />
            <div className='user'>
                <img src={cuser.profilepic} alt="" />
                <span>{cuser.name}</span>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar