import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import './Stories.scss'

const Stories = () => {

    const {cuser}=useContext(AuthContext);

    const samples=[
        {
            id:2,
            name:"Maran",
img:"https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"        },
        {
            id:3,
            name:"Joseph",
            img:"https://images.unsplash.com/photo-1486092573896-31a373bf1aad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDQ4MDA5NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:4,
            name:"Raman",
            img:"https://images.unsplash.com/photo-1470611736165-18737bb3afce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NDQ4MDA5NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        
    ]

  return (
    <div className="stories">
        <div className="story">
            <img src="https://images.unsplash.com/photo-1470611398812-f32f4afdeba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0NDgwMDk0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <span>{cuser.name}</span>
            <button>+</button>
        </div>
        {samples && samples.map((story,i)=>(
                <div className="story" key={i}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            )      
        )}
    </div>
  )
}

export default Stories