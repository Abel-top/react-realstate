import React, { useEffect } from 'react'
import './footer.css'
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
   
        const getCurrentYear = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear;
      };
      

    
  return (
    <div className="f-wrapper">
        <div className="f-container">
            <div className="f-left">
                <img src='./logo.png' width={50}/>
                <span><FaLocationDot/>Addis Ababa, Ethiopia</span>
                <div className="copyright">
            Copyright © <span>{getCurrentYear()}</span> All rights reserved
        </div>
            </div>
            <div className="f-right">
                <h4>Useful Links</h4>
                <p>About us</p>
                <p>Contact us</p>
            </div>
            
        </div>
       
    </div>
  )
}

export default Footer