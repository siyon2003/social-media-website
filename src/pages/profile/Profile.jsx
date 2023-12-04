import React, { useContext, useEffect, useState } from 'react'
import './profile.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from '../../components/Posts/Posts';
import { DarkContext } from '../../context/darkcontext';

const Profile = () => {
  const {mode}=useContext(DarkContext);
  const [date,setdate]=useState();
  const dayss=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const [day,setday]=useState();
  const handleChange=(e)=>{
      setdate(e.target.value)
      console.log(date);
      
  }

  useEffect(()=>{
    let d=new Date(date);
    let da=d.getDay();
    console.log(da);
    setday(dayss[da]);
  },[date])

  return (
    <div className={`profiles-${mode}`}>
      <div className="images">
        <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" className="cover" />
        <img src="https://images.unsplash.com/photo-1486092573896-31a373bf1aad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDQ4MDA5NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className="profilepic" />
      </div>
      <div className="profilecontainer">
        <div className="uinfo">
        <div className="left">
          
            <a href="www.facebook.com"><FacebookOutlinedIcon fontSize='large'/></a>
            <a href="www.google.com"><InstagramIcon fontSize='large'/></a>
            <a href="www.google.com"><TwitterIcon fontSize='large'/></a>
            <a href="www.google.com"><LinkedInIcon fontSize='large'/></a>
        </div>
        <div className="center">
          <span>John Doe</span>
          <div className="info">
            <div className="item">
              <LocationOnOutlinedIcon />
              <span>USA</span>
            </div>
            <div className="item">
              <LanguageOutlinedIcon />
              <span>English</span>
            </div>
          </div>
            <button>Follow</button>

        </div>
        <div className="right">
          <div className='items'>
          <EmailOutlinedIcon />
          <MoreVertOutlinedIcon />
          </div>
          
        </div>
        </div>  
      </div>
      <Posts />
      <input type="date" onChange={handleChange}/>
      <p>{date}</p>
      <p>{day}</p>
    </div>
  )
}

export default Profile