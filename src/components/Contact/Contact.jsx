import React from 'react'
import './contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill}  from 'react-icons/bs'
function Contact() {
  return (
    <div className="c-wrapper">
        <div className="c-contanier" id="contact">
            <div className="c-left">
              <h3 style={{color:"green"}}>Contact Us </h3>
              <div className='grid-wrapper'>
                <div className='c-row1'>
                  <MdCall size={25}/>
                  <p>Call</p>
                  <span>1204040</span>
                  <button className="button">Call Now</button>
                </div>
                <div className='c-row2'>
                <BsFillChatDotsFill size={25}/>
                  <p>CHAT</p>
                  <span>1204040</span>
                  <button className="button">Chat</button>
                </div>
                

              </div>
            </div>
            <div className="c-right">
               <img src="./contact.jpg" alt=""  width={300} height={400}/>
            </div>

        </div>
    </div>
  )
}

export default Contact