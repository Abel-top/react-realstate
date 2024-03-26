import React, { useState } from 'react'
import '../Header/header.css'
import { CgMenuRight } from "react-icons/cg";
import OutsideClickHandler from 'react-outside-click-handler';
function Header() {
  const [menuOpened,setMenuOpened] =useState(false)

  const getStyle =(menuOpened)=>{
      if(document.documentElement.clientWidth <= 800){
        return {display: !menuOpened && "none"}
      }
  }
  return (
    <div className="h-wrapper">
        <div className="flexCenter margin h-container">
            <img src="./logo.png" width={50}/>
            <OutsideClickHandler
             onOutsideClick={
              ()=>{
                setMenuOpened(false)
              }
             }
            >

            <div className="h-links"
            style={getStyle(menuOpened)}
            >
                <a href="#residence" >Residencies</a>
                <a href="#value" >Our Values</a>
                <a href="#contact">Contact Us</a>
                <a href="#started">Get Started</a>
                <button className='margin button' >
                   <a href='#contact' style={{textDecoration:"none",color:"white"}}>Contact</a> 
                </button>
                
            </div>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}><CgMenuRight color="blue" size={30}/> </div>
            </OutsideClickHandler>

        </div>
    </div>
  )
}

export default Header