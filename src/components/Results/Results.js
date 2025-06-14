"use client";
import React, { useRef } from "react";
import Carousel from "@/components/Carousel/Carousel";
import Label from "@/components/Shared/Label/Label";
import "./Results.scss";
import ArrowIcon from "../Shared/IconsSvg/ArrowIcon/ArrowIcon";

export default function Results() {
  const swiperRef = useRef(null); 

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); 
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); 
    }
  };

  return (
    <div className="results-section container">
      <div className="results-section__content">
        <div className="results-section__title-container">
          <Label label="CASOS DE ÉXITO" />
          <h1 className="results-section__title">
            <span>Resultados</span> que hablan por sí solos
          </h1>
        </div>

        <div className="results-section__buttons-container">
          <div className="results-section__nav-buttons">
            <button
              className="results-section__nav-buttons--prev nav-button"
              onClick={handlePrev} 
            >
              <ArrowIcon />
            </button>
            <button
              className="results-section__nav-buttons--next nav-button"
              onClick={handleNext}
            >
              <ArrowIcon rotation={180}/>
            </button>
          </div>
          <button className="results-section__link-button nav-button">
            Ver más
          </button>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel onSwiper={(swiper) => (swiperRef.current = swiper)} />
      </div>
    </div>
  );
}