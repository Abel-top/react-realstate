import React, { useEffect } from 'react'
import './Value'
import {
    AccordionItem,
    AccordionItemButton,
    AccordionItemState,
    AccordionItemPanel,
    AccordionItemHeading,
    Accordion
    
} from 'react-accessible-accordion'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import 'react-accessible-accordion/dist/fancy-example.css'
import './value.css'
import Aos from 'aos' 
import data from '../../utils/Accordions'
function Value() {
   
    const anim =()=>{
        if(document.documentElement.clientWidth <=850){
           return "fade-up"
        }

    }
    useEffect(()=>{
        Aos.init()
    }) 
    console.log(anim())
  return (
    <div className="v-wrapper">
       <div className="v-container" id="value">
        <div className="v-left" data-aos={anim()} data-aos-duration="3000">
            <img src="./value.jpg" width={300} height={400} alt=""  />
        </div>
          <div className="v-right">
            <h3 style={{marginBottom:"20px",color:"green"}}>Our Values</h3>
            <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className='accordion-main'
            >
                {
                    data.map((items,i)=>{
                        return(
                            <AccordionItem
                            className='accrodion-items' key={i} uuid={i}>
                                <AccordionItemHeading className='heading'>
                                    <AccordionItemButton className='accordion-button' >
                                        <div className='accrodion-icon'>{items.icon}</div>
                                        <span>{items.heading}</span>
                                        <div><MdOutlineArrowDropDown size={20}/></div>

                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className='accordion-panel'>
                                    <p>{items.deatils}</p>
                                </AccordionItemPanel>

                            </AccordionItem>


                        )
                    })

                }

            </Accordion>
         </div>

       </div>

    </div>
  )
}

export default Value