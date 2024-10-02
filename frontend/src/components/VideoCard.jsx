import React from 'react'
import '../styles/VideoCard.css';

const playButton = <svg width="24" height="24" id='videoSVG' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/></svg>


function VideoCard({image,name,index}) {
  return (
    <div className='videoCard' style={{backgroundImage:`url(${image})`}}>

        <a href="#/">{playButton}</a>
        <p>{name}</p>
      
    </div>
  )
}

export default VideoCard
