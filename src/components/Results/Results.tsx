"use client";
import React, { useRef } from "react";
import Carousel from "@/components/Carousel/Carousel";
import ArrowIcon from "../Shared/IconsSvg/ArrowIcon/ArrowIcon";
import Link from "next/link";
import { resultsData } from "@/lib/resultsData/resultsData";
import "./Results.scss";


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
        <div className="results-section__buttons-container">
          <div className="results-section__nav-buttons">
            <button
              className="results-section__nav-buttons--prev nav-button button-template"
              onClick={handlePrev} 
            >
              <ArrowIcon color="#1C211F"/>
            </button>
            <button
              className="results-section__nav-buttons--next nav-button button-template"
              onClick={handleNext}
            >
              <ArrowIcon rotation={180} color="#1C211F"/>
            </button>
          </div>
          <Link className="results-section__link-button button-template" href={'/resultados'}>Ver Todos</Link>
        </div>
      </div>
      <div className="results-section__carousel-container">
        <Carousel onSwiper={(swiper) => (swiperRef.current = swiper)} items={resultsData} />
      </div>
    </div>
  );
}