import React, { useContext } from 'react'
import './Leftbar.scss'
import Friends from '../../assets/friends.png';
import Groups from '../../assets/two.png';
import Market from '../../assets/market.png';
import clock from '../../assets/three.png';
import { DarkContext } from '../../context/darkcontext';



const Leftbar = () => {
  const {mode}=useContext(DarkContext);
  return (
    <div className={`leftbar-${mode}`}>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={clock} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcut</span>
        <div className="item">
            <img src="" alt="" />
            <span>Events</span>
          </div>
        <div className="item">
            <img src="" alt="" />
            <span>Gaming</span>
          </div>
        <div className="item">
            <img src="" alt="" />
            <span>Gallery</span>
          </div>
        <div className="item">
            <img src="" alt="" />
            <span>Videos</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
        <div className="item">
            <img src="" alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Courses</span>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Leftbar