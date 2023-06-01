"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import styles from "./slider.module.css";
import slide1 from "../../../public/img/main/slide1.png";
import slide2 from "../../../public/img/main/slide2.png";
import slide3 from "../../../public/img/main/slide3.jpg";
import slide4 from "../../../public/img/main/slide4.jpg";
const Slider = () => {
  const slideImages: { url: object; caption: string }[] = [
    { url: slide1, caption: "Дорожные знаки" },
    { url: slide2, caption: "11ДО" },
    {
      url: slide3,
      caption: "Дорожная разметка",
    },
    { url: slide4, caption: "ЗИП" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slideImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);
    // clearing interval
    return () => clearInterval(timer);
  });
  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  return (
    <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
      <Image
        src={slideImages[currentIndex].url}
        alt={slideImages[currentIndex].caption}
        //width={}
        // height={75}
        className={styles.slide}
      />
    </div>
  );
};
export default Slider;
