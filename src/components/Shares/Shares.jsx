import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import Friend from '../../assets/friends.png'
import Place from '../../assets/market.png'
import "./Shares.scss";
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Shares=()=>{
  const {cuser} = useContext(AuthContext)

  const [file,setfile]=useState(null)
  const [desc,setdesc]=useState("")

  const upload=async()=>{
    try{
      const formdata=new FormData();
      formdata.append("file",file);
      const res=await makeRequest.post("/upload",formdata)
      return res.data

    }catch(err){
      console.log(err)
    }
  }

  const queryClient=useQueryClient()

  const mutation = useMutation({
    mutationFn: (newpost)=>{
        return makeRequest.post("/posts",newpost)
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  const handleSubmit= async(e)=>{
        e.preventDefault();
        let imageUrl="";
        if(file) imageUrl=await upload();  
        mutation.mutate({desc,img:imageUrl})
        setdesc("")
        setfile(null)

  }

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className='left'>
          <img
            src={cuser.profilepic}
            alt=""
            />
          <input type="text" placeholder={`What's on your mind ${cuser.name}?`} onChange={(e)=>setdesc(e.target.value)} value={desc}/>
          </div>
          <div className="right">
           {file &&  <img className="file" src={URL.createObjectURL(file)} alt="samplepost" /> }
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} onChange={(e)=>setfile(e.target.files[0])}/>
            <label htmlFor="file">
              <div className="item">
                <img src={""} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Place} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleSubmit}> Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Shares;