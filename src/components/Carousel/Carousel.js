'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.scss';
import ResultCard from '../ResultCard/ResultCard';

export default function Carousel({ onSwiper }) {
  const carouselItems = [
    {
      id: 1,
      imageUrl: '/assets/images/bottom-background.jpg',
      title: 'Generadores de Alta Tensión',
      description: 'Reconstrucción de bobinados para extender la vida útil.',
    },
    {
      id: 2,
      imageUrl: '/assets/images/bottom-background.jpg',
      title: 'Automatización de Sistemas',
      description: 'Optimización de procesos críticos con tecnología avanzada.',
    },
    {
      id: 3,
      imageUrl: '/assets/images/bottom-background.jpg',
      title: 'Diagnóstico Eléctrico Avanzado',
      description: 'Análisis detallado para mejorar la eficiencia operativa.',
    },
    {
      id: 4,
      imageUrl: '/assets/images/bottom-background.jpg',
      title: 'Evaluación de Riesgos',
      description: 'Identificación de fallas críticas y análisis de causa raíz.',
    },
    {
      id: 5,
      imageUrl: '/assets/images/bottom-background.jpg',
      title: 'Repotenciación de Centrales',
      description: 'Mejoramos equipos antiguos para aumentar la eficiencia.',
    },
    {
      id: 6,
      imageUrl: '/assets/images/bottom-background.jpg',
      title: 'Soluciones Personalizadas',
      description: 'Diseño de estrategias específicas para tus necesidades.',
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      onSwiper={onSwiper}
    >
      {carouselItems.map((item) => (
        <SwiperSlide key={item.id}>
          <ResultCard
            backgroundImage={item.imageUrl}
            description={item.description}
            title={item.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
