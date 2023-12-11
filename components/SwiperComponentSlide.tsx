import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
type Props = {
  children: React.ReactNode;
};
const InstanceSwiper = Swiper as any;

function SwiperComponentSlide({ children }: Props) {
  return (
    <InstanceSwiper
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
        waitForTransition: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper2">
      {children}
    </InstanceSwiper>
  );
}

export default SwiperComponentSlide;
