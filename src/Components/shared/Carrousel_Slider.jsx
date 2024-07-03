import React from 'react'
import 'swiper/css'
import "../shared/Carrousel_Slider.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Mousewheel, Navigation, Pagination} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination';






const Carrousel_Slider = ({prod}) => {
    

  
  
    return (


    <div className='slider'>
       
      <Swiper 
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}

        
        modules={[Navigation, Pagination, Mousewheel, Keyboard]} className="mySwiper">
        <SwiperSlide> <img className="img_slider" src={prod?.images[0].url} alt="" />     </SwiperSlide>
        <SwiperSlide> <img className="img_slider" src={prod?.images[1].url} alt="" />     </SwiperSlide>
        <SwiperSlide> <img className="img_slider" src={prod?.images[2].url} alt="" />     </SwiperSlide>


      </Swiper>
     
  
        
    </div>
  )
}

export default Carrousel_Slider