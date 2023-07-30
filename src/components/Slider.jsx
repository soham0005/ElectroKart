import { Carousel} from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider({start}) {
  return (
    <Carousel fade>

    {
        start.map((item,index)=>(
            <Carousel.Item key={index}>
                <img className='d-block w-100'
                src={item}
                alt='First Slide'
            />
            </Carousel.Item>
        ))
    }
        
    </Carousel>
  )
}

export default Slider
