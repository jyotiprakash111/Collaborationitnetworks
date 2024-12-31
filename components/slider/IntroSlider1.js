import Link from 'next/link';
import React, { useState, useRef } from 'react'
import ModalVideo from 'react-modal-video';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide, Pagination, useSwiper } from "swiper/react";


SwiperCore.use([Autoplay, Navigation]);

const IntroSlider1 = () => {

    const [isOpen, setOpen] = useState(false)
    const swiper = useSwiper();

    const swiperRef = useRef(null);
    const slideNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext(500, true); // Slide to the next slide with speed 500ms and runCallbacks set to true 
        }
    }

    const data = [
        {
            uri: "url(images/main-slider/sliderimage-1.jpg)",
            subtitle: "Solutions for your businesses",
            businessname: "Collaboration IT Networks",
            button: "Explore More",
            play: "Watch Video",
        },
        {
            uri: "url(images/main-slider/sliderimage-2.jpg)",
            subtitle: "Solutions for your businesses",
            businessname: "Collaboration IT Networks",
            button: "Explore More",
            play: "Watch Video",
        },
        {
            uri: "url(images/main-slider/sliderimage-3.jpg)",
            subtitle: "Solutions for your businesses",
            businessname: "Collaboration IT Networks",
            button: "Explore More",
            play: "Watch Video",
        },
    ];

    return (
        <>
            <Swiper
                slidesPerView={1}
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
                Pagination={true}
                // breakpoints={{
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     575: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     767: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     991: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     1199: {
                //         slidesPerView: 4,
                //         spaceBetween: 30,
                //     },
                //     1350: {
                //         slidesPerView: 5,
                //         spaceBetween: 30,
                //     },
                // }}
                className="project-carousel">
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="bg-image" style={{ backgroundImage: item.uri }} />
                            <div className="auto-container">
                                <div className="content-box">
                                <span className="sub-title animate-1">{item.subtitle}</span>
                                <h1 className="title animate-2">{item.businessname.slice(0,17)}<br />{item.businessname.slice(16,26)}</h1>
                                <div className="btn-box animate-3">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">{item.button}</span></Link>
                                    <a onClick={() => setOpen(true)} className="play-btn lightbox-image"><i className="icon fa fa-play" />{item.play}</a>
                                </div>
                            </div>
                            </div>
                            <button onClick={slideNext}>Slide to the next slide</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ModalVideo channel='youtube' autoplay={1} isOpen={isOpen} videoId="ZK-rNEhJIDs?si=PeqMYTO3y1uzK5VR" onClose={() => setOpen(false)} />
        </>
    );
};

export default IntroSlider1;

