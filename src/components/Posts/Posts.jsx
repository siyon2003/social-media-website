import React from 'react'
import Post from '../Post/Post'
import './Posts'

import {
  useQuery
} from '@tanstack/react-query'
import { makeRequest } from '../../axios'

const Posts = () => {
  

  // const posts=[
  //   {
  //     id:1,
  //     userId:1,
  //     name:"John Doe",
  //     profilepic:"https://images.unsplash.com/photo-1470611398812-f32f4afdeba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0NDgwMDk0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
  //     img:"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {
  //     id:2,
  //     userId:1,
  //     name:"Jane Doe",
  //     profilepic:"https://images.unsplash.com/photo-1470611398812-f32f4afdeba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0NDgwMDk0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
  //     img:"https://images.unsplash.com/photo-1512354739413-60f30ea4e0ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {
  //     id:3,
  //     userId:1,
  //     name:"Mark Doe",
  //     profilepic:"https://images.unsplash.com/photo-1470611398812-f32f4afdeba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0NDgwMDk0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  //     desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
  //     img:"https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBuZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  //   },
  // ]

  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      makeRequest.get("/posts").then((res)=>{
        return res.data
      })
    })
    
    
  return (
    <div className='posts'>
        {error? "Something went wrong": isPending ? "Loading...." : data && data.map((post)=>(
          <Post key={post.id} post={post} />
        ))}
       
    </div>

  )
}

export default Posts