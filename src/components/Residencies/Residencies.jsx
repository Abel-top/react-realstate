import React, { useEffect } from 'react'
import {Swiper,useSwiper,SwiperSlide, useSwiperSlide} from 'swiper/react'
import 'swiper/css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './residencies.css'
import data from '../../utils/slide.json'
import { sliderSettings } from '../../utils/SliderSetting'
function Residencies() {
    useEffect(()=>{
        AOS.init()
    },[])
  return (
    <div className="r-wrapper">
         <div className="r-container" id="residence">
            <div className=" r-text">
                <h3>Popular Residenceies</h3>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButton/>
               
                {
                    data.map((card,index)=>(
                        <SwiperSlide key={index}>
                            <div className="r-card" data-aos="zoom-in" data-aos-duration="2000">
                                <img src={card.image} width={200} height={150} alt="image"/>
                                <h4>{card.price +" "} birr</h4>
                                <h5>{card.name}</h5>
                                <h6>{card.desc}</h6>
                            </div>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
         </div>
    </div>
  )
}

export default Residencies
const SliderButton =()=>{
    const slide = useSwiper()
    return(
        <div className="r-buttons">
            <button onClick={()=>{slide.slidePrev()}}>&lt;</button>
            <button onClick={()=>{slide.slideNext()}}>&gt;</button>
        </div>
    )
}