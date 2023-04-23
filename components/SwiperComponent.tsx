import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination ,Autoplay } from "swiper";
type Props = {
    children:React.ReactNode,
}

const SwiperComponent = ({children}: Props) => {
  return (
    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    autoplay={{
        delay: 5000,
        disableOnInteraction: true,
        waitForTransition:true
      }}
      pagination={{
        clickable: true,
      }}
    modules={[EffectCoverflow, Pagination ,Autoplay]}
    className="mySwiper"
  >
    {children}
</Swiper>
)
}

export default SwiperComponent