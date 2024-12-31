import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Brand = () => {

    const data = [
        {
            img: "/images/clients/cisco.avif",
        },
        {
            img: "/images/clients/microsoft.png",
        },
        {
            img: "/images/clients/microsoft.png",
        },
        {
            img: "/images/clients/redhat.png",
        },
        {
            img: "/images/clients/microsoft.png",
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className="project-carousel"
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="slide-item"> <a href="#"><img src={item.img} title='Oitech' /></a> </div>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default Brand;

