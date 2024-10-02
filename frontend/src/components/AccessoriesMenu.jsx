import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Accessories.css';

function AccessoriesMenu() {
  return (
    <div className='AccessoriesMenu'>
        <Link className='AccessoriesLink' to='/music'>Music</Link>
        <Link className='AccessoriesLink' to='/smartDevices'>Smart Devices</Link>
        <Link className='AccessoriesLink' to='/home'>Home</Link>
        <Link className='AccessoriesLink' to='/lifestyle'>LifeStyle</Link>
        <Link className='AccessoriesLink' to='/mobileAccessories'>Mobile Accessories</Link>


      
    </div>
  )
}

export default AccessoriesMenu
