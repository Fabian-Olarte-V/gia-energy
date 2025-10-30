"use client";

import React, { useRef } from "react";
import Carousel from "@/components/Carousel/Carousel";
import ArrowIcon from "@/components/Shared/IconsSvg/ArrowIcon/ArrowIcon";
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
    <section className="results-section container">
      <div className="results-section__content">
        <div className="results-section__buttons">
          <div className="results-section__nav">
            <button
              className="results-section__nav--prev nav-button button-template"
              onClick={handlePrev}
            >
              <ArrowIcon color="#0F3529" />
            </button>
            <button
              className="results-section__nav--next nav-button button-template"
              onClick={handleNext}
            >
              <ArrowIcon rotation={180} color="#0F3529" />
            </button>
          </div>
          <Link className="results-section__link button-template" href="/resultados">Ver Todos</Link>
        </div>
      </div>
      <div className="results-section__carousel">
        <Carousel onSwiper={(swiper) => (swiperRef.current = swiper)} items={resultsData} />
      </div>
    </section>
  );
}