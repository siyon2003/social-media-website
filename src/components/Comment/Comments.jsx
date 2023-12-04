import React, { useContext } from 'react'
import './Comments.scss'
import SendIcon from '@mui/icons-material/Send';
import { AuthContext } from '../../context/auth';
import { DarkContext } from '../../context/darkcontext';
import { Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

// const comments=[
//     {
//         id:1,
//         userId:1,
//         name:"John Doe",
//         profilepic:"https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//         comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
//     },
//     {
//         id:1,
//         userId:1,
//         name:"John Doe",
//         profilepic:"https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//         comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
//     },
//     {
//         id:1,
//         userId:1,
//         name:"John Doe",
//         profilepic:"https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//         comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
//     }

// ]

const Comments = () => {

    const {cuser}=useContext(AuthContext);
    const {mode}=useContext(DarkContext);

    const { isPending, error, data } = useQuery({
        queryKey: ['comments'],
        queryFn: () =>
          makeRequest.get("/comments").then((res)=>{
            return res.data
          })
        })

  return (
      <div className={`comments-${mode}`}>
        <div className="write">
            <img src={cuser.profilepic} alt="" />
            <input type="text" placeholder='Enter the comments....'/>
            <Button><SendIcon /></Button>
            {/* <button>send</button> */}
        </div>
        {error? "Something went wrong":isPending?"Loading":data && data.map((comment,i)=>(
            <div className="comment" key={i}>
                <img src={comment.profilepic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.comment}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments