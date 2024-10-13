import React, { useState } from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>

const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" /></svg>

const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"/></svg>




const youtubeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85" /><path d="M93.333 117.558l61.334-34.89-61.334-34.893z" fill="#fff"/></svg>



const twitterIcon = <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-44.7006 -60.54775 387.4052 363.2865"><path d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464"/></svg>

const facebookIcon = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/></svg>

const instagramIcon =<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"/></svg>






const Footer = ({footer}) => {
    const [loading ,setLoading] =useState(false)
    const [email,setEmail]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs
          .send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
              
              to_email: email,
            
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {
             setLoading(false)
              toast("message successfully sent");
            },
            (error) => {
              toast("error occured")
            }
          );
       
        setEmail("");
       
        
      };

    return (
       <>
        <div className="PreFooter" id='footer'>
            <div>
                {repeatIcon}
                 <p> <b>Hassle-free replacement</b> <br/>10-day easy replacement policy on mi.com</p>
               </div>
            <div>{shieldIcon} <p> <b>100% secure payments</b> <br/> We support Cards, Wallets, EMI and COD</p></div>
            <div>{mapIcon} <p> <b>Vast service network</b> <br/> 1000 Mi service-centers across 600 cities</p></div>
        </div>

        <div className="PreFooter2">
             <div> <p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>

             <div>
                 <div className='subscribe-input'>
                     <input type="email" name="email" value={email} placeholder="Enter Email Address" onChange={(e)=> setEmail(e.target.value)} />
                     <button onClick={handleSubmit}>{loading ? "Subscribing..." : "Subscribe"}</button>
                 </div>
                 <span>Thanks. You're on our email list for special offers.</span>
                 <ToastContainer/>
             </div>

             <div>
                    <p>FOLLOW MI</p>
                    <span>We want to hear from you!</span>
             </div>

             <div>
                <a href="https://facebook.com">{facebookIcon}</a>
                 <a href="https://youtube.com">{youtubeIcon}</a>
                  <a href="https://instagram.com">{instagramIcon}</a>
                  <a href="https://twitter.com">{twitterIcon}</a>
             </div>
        </div>

        <div className="footer">
                  <div> 
                     <p> SUPPORT</p>
                      {footer.support.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> SHOP AND LEARN</p>
                  {footer.shopAndLearn.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name} </a>

                      ))}

                  </div>
                  <div>
                   <p> RETAIL STORE</p>
                    {footer.retailStore.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                           <p>  ABOUT</p>
                             {footer.aboutUS.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> CONTACT US</p>
                  {footer.contactUs.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                      <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
                  </div>


                  
        </div>
        <div className="footerBorder">
       <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
        </div>

       </>
    )
}

export default Footer
