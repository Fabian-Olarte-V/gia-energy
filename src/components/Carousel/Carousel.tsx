'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ISimpleResultCardProps } from '@/interfaces/result/resultCard.interface';
import SimpleResultCard from '../ResultCard/SimpleResultCard/SimpleResultCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.scss';


type CarouselProps = {
  onSwiper: (swiper: any) => void; 
  items: ISimpleResultCardProps[]; 
};

export default function Carousel({ onSwiper, items }: CarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{ delay: 4000 }}
      onSwiper={onSwiper}
      breakpoints={
        {
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }
      }
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <SimpleResultCard data={item}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
