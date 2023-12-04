import React, { useContext } from 'react'
import './home.scss'
import { DarkContext } from '../../context/darkcontext'
import Stories from '../../components/Stories/Stories';
import Posts from '../../components/Posts/Posts';
import Shares from '../../components/Shares/Shares';


const Home = () => {
  const {mode}=useContext(DarkContext);

  return (
    <div className={`home-${mode}`}>
      <Stories />
      <Shares />
      <Posts />
    </div>
  )
}

export default Home