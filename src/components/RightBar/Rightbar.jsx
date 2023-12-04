import React, { useContext } from 'react'
import './Rightbar.scss'
import { DarkContext } from '../../context/darkcontext';
const Rightbar = () => {
  const {mode}=useContext(DarkContext);
  console.log(mode);
  const cname='rightbar-'+mode;
  console.log(cname);
  return (
   <div className={`rightbar-${mode}`}>
    <div className="container">
      <div className="item">
        <span>Suggestions for you</span>
        <div className="user">
          <div className="userInfo">
            <img src="https://images.unsplash.com/photo-1486092573896-31a373bf1aad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDQ4MDA5NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <span>John Doe</span>
          </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Remove</button>
          </div>
        </div>
      
        <div className="user">
          <div className="userInfo">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            <span>John Doe</span>
          </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className="item">
        <span>Latest Activities</span>
        <div className="user">
          <div className="userInfo">
            <img src="" alt="" />
            <p>
            <span>John Doe </span> liked a post
            </p>
          </div>
            <span>2 min ago</span>
          
        </div>
      
        <div className="user">
          <div className="userInfo">
            <img src="" alt="" />
            <p>
            <span>John Doe </span> liked a post
            </p>
          </div>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="item">
        <span>Online</span>
        <div className="user">
          <div className="userInfo">
            <img src="" alt="" />
            <div className='online'/>
            <span>John Doe</span>
          </div>
        </div>
      
        <div className="user">
          <div className="userInfo">
            <img src="" alt="" />
            <div className='online'/>
            <span>John Doe</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src="" alt="" />
            <div className='online'/>
            <span>John Doe</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src="" alt="" />
            <div className='online'/>
            <span>John Doe</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src="" alt="" />
            <div className='online'/>
            <span>John Doe</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src="" alt="" />
            <div className='online'/>
            <span>John Doe</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src="" alt="" />
            <div className='online'/>
            <span>John Doe</span>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src="" alt="" />
            <div className='online'/>
            <span>John Doe</span>
          </div>
        </div>
      </div>
   </div>
   </div>
  )
}

export default Rightbar