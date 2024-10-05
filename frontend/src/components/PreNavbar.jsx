import React, { useState } from 'react'
import '../styles/PreNavbar.css';
const closeIcon=<svg xmlns="http://www.w3.org/2000/svg" id='closeSvg' height="35" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
const menuIcon=<svg xmlns="http://www.w3.org/2000/svg" id='menuSvg' height="30" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" id='cartSvg' height="48" viewBox="0 -960 960 960" width="48"><path d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg>;
function PreNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="Nav">
      <div className='preNav'>
        <div>
            <a href="#head">Shopify</a> <span>|</span>
            <a href="#footer">Redmi Phones</a> <span>|</span>
            <a href="#head">Retail Store</a> <span>|</span>
            <p>
              ElectroKart
            </p>

        </div>
        <div>
        <a href="#head">HELP</a> <span>|</span>
        <a href="#head">REGISTER</a> <span>|</span>
        <a href="#head">{cartIcon}Cart(0)</a>
        <p onClick={toggleMenu}>{menuOpen?closeIcon:menuIcon}</p>
        </div>
    </div>

    {menuOpen && (
      <div className='mobileNav'>
            <a href="#head">Shopify</a>
            <a href="#footer">Redmi Phones</a>
            <a href="#head">Retail Store</a>
        <a href="#head">HELP</a> 
        <a href="#head">REGISTER</a>
        <a href="#head">{cartIcon}Cart(0)</a>
    </div>
    )}
    </div>
    
  )
}

export default PreNavbar
