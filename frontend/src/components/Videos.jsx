import React from 'react'
import VideoCard from '../components/VideoCard.jsx';
import '../styles/Videos.css';

function Videos({videos}) {
  return (
    <div className='videos'>
      {
        videos.map((item,index)=>{
            return (
                <VideoCard index={index} key={item.image} image={item.image} name={item.name}/>
            )
        })
      }
    </div>
  )
}

export default Videos
