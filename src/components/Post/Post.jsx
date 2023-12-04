import React, { useContext, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Post.scss'
import {Link} from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Comments from '../Comment/Comments';
import { DarkContext } from '../../context/darkcontext';
import moment from "moment";

const Post = ({post}) => {
  const {mode}=useContext(DarkContext);
  const [liked,setlike]=useState(false);
  const [contentOpen,setCommentopen]=useState(false);

  const liking=()=>{
    setlike(!liked);
  }
  return (
    <div className={`post-${mode}`}>
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilepic} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{textDecoration:'none',color:'inherit'}}>
              <span className='name'>{post.name}</span>
              </Link>
              <span className='date'>{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={"./uploads/"+post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon onClick={liking}/>:<FavoriteBorderOutlinedIcon onClick={liking} />}
            12 likes
          </div>
          <div className="item">
            <CommentOutlinedIcon onClick={()=>setCommentopen(!contentOpen)}/> <span onClick={()=>setCommentopen(!contentOpen)}>10 comments</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon /> Share
          </div>
        </div>
        {contentOpen && <Comments />}
      </div>
    </div>
  )
}

export default Post