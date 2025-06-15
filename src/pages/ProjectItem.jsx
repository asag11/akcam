

import styled from "styled-components"

import { Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import image from "../images/image.png"
import imagex from "../images/imagex.png"
import image16 from "../images/image 16.png"
import bath from "../images/bath.png"

import { useRef, useState } from "react";
import useWindowDimensions from "../hooks/useWindowSize";

import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight  } from "react-icons/md";
import HeaderMobile from "../components/sections/HeaderMobile";

const Container = styled.div`
          /* SEÇİMİ TAMAMEN KAPAT */
       /* tıklayınca/çift tıklayınca seleksiyon oluşmasın */

.wrapper{
    width: 100%;
    height: auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    padding-top: 50px;

    .slider-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        position: relative;
     

        .arr-container{
            width: 32px;
            height: 32px;
            background-color: #FAFAFA80;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
            z-index: 2;
            position: absolute;

            &:first-child{
                left: 20px;
            }

            &:last-child{
                right: 20px;
            }
            

            .arr-icon{
                font-size:24px;
                fill: #616161;
            }
        }

    

        .slider-wrapper{
            overflow: hidden;
            width: 100%;
            max-width: 100%;

       user-select: none !important;
       -webkit-user-select: none !important;
       -ms-user-select: none !important;
       /* eğer yine seçiliyorsa, seçim rengini şeffaf yap */
       &::selection {
         background: transparent !important;
       }

            .slider{
                display: flex;
                justify-content: space-between;
                width: 100%;
                gap: 17px;
                transition: transform 0.5s ease-in-out;

                .slide-item{
                    height: auto;
                    transition: .5s ease-in-out;
                    cursor: pointer;
                    width: 100%;

                    .slide-img{
                        width: 100%;
                        height: 600px;
                        object-fit: cover;
                    }


                }
            }

        }

    }
    

    .plist{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;
        margin-top: 30px;

        p{
            font-size: 18px;
            font-weight: 300;
            line-height: 25px;
        }
    }



}

  @media (max-width: 1600px) {

    .wrapper {
        padding-left: 20px !important;
    }
}

  @media (max-width: 880px) {

    .wrapper {
        padding-top: 0 !important;
        padding: 0 20px !important;
    }

    .slide-item{
    height: auto;
    transition: .5s ease-in-out;
    cursor: pointer;
    width: 100%;

    .slide-img{
        width: 100%;
        height: 300px !important;
    }

        p{
            font-size: 16px !important;
        }


    }

 

}  
`

const pList = [
        "Zarafet ve işlevselliğin bir araya geldiği bu iç mekân projesinde; mutfak, banyo ve giysi dolapları bir bütün olarak ele alındı. Modern çizgilerin hakim olduğu mutfak tasarımında, sade renk paleti ile siyah detaylar dengeli bir kontrast oluşturarak mekâna sofistike bir hava katıyor. Doğal taş dokuları, alt dolaplarla birleşerek hem estetik hem de dayanıklı bir kullanım sunuyor.",
        "Aynı çizgiyi takip eden banyo ve giysi dolabı tasarımlarında da, minimalizm ve fonksiyonelliği ön planda tuttuk. Özenle seçilmiş malzemeler ve ince işçilikle hayata geçirilen her detay, kullanıcıya hem görsel hem de fiziksel konfor sağlamak üzere planlandı.",
        "Tasarım sürecinde modern yaşamın gereksinimleriyle estetik beklentileri bir araya getirerek, kullanıcının yaşam alanında huzurlu ve şık bir atmosfer yaratmayı hedefledik."
    ] 

    const slideList = [
        {
            id: 1,
            img: image
        },
        {
            id: 2,
            img: imagex
        },
        {
            id: 3,
            img: image16
        },
        {
            id: 4,
            img: bath
        },
    ]

const ProjectItem = () => {

  const swiperRef = useRef(null);

    // const [visibleItems, setVisibleItems] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);

    const {windowDimensions} = useWindowDimensions()

  return (
    <Container>
        <div className="wrapper">

            {
                windowDimensions.width <= 880 &&
                <HeaderMobile/>
            }
            <div className="slider-container">
                {
                    activeIndex !== 0 &&
                    <div className={"arr-container"} onClick={() => swiperRef.current.slideTo(activeIndex-1)}>
                        <MdOutlineKeyboardArrowLeft className="arr-icon"/>
                    </div>
                }
                <div className="slider-wrapper">
                    <div className="slider">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            slidesPerView={1}
                            onSwiper={(swiper) => { swiperRef.current = swiper}}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        >
                            {
                                slideList.map((item, idx) => (
                                    <SwiperSlide key={idx} className={"slide-item"} onClick={() => {}} >
                                        <img src={item.img} className="slide-img" alt="" />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>

   
                {
                    activeIndex +1 !== slideList.length &&
                    <div className={"arr-container"} onClick={() => swiperRef.current.slideTo(activeIndex+1)}>
                        <MdKeyboardArrowRight className="arr-icon"/>
                    </div>
                }
            </div>


            <div className="plist">
                {
                    pList.map(item => (
                        <p>{item}</p>
                    ))
                }
            </div>
        </div>
    </Container>
  )
}

export default ProjectItem