'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Result } from '@/interfaces/result/resultCard.interface';
import SimpleResultCard from '../ResultCard/SimpleResultCard/SimpleResultCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Carousel.scss';


type CarouselProps = {
  onSwiper: (swiper: any) => void; 
  items: Result[]; 
};

export default function Carousel({ onSwiper, items }: CarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      onSwiper={onSwiper}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <SimpleResultCard data={item}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
