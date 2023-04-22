import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards ,Autoplay ,Pagination} from "swiper";
type Props = {
    children:React.ReactNode,
}

const SwiperComponent = ({children}: Props) => {
  return (
    <Swiper
    effect={"cards"}
    centeredSlides={true}
    grabCursor={true}
    autoplay={{
        delay: 5000,
        disableOnInteraction: true,
        waitForTransition:true
      }}
      pagination={{
        clickable: true,
      }}
    modules={[EffectCards,Pagination ,Autoplay]}
    className="mySwiper"
    >
    {children}
</Swiper>
)
}

export default SwiperComponent