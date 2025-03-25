"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "@/images/image1.jpg";
import image2 from "@/images/image2.jpg";
import image3 from "@/images/image3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Image data array
const images = [
  {
    src: image1,
    titel: 'عنوان1',
    subtitle: 'عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص '
  },
  {
    src: image3,
    titel: 'عنوان2',
    subtitle: 'عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص '
  },
  {
    src: image2,
    titel: 'عنوان3',
    subtitle: 'عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص '
  },
  {
    src: image3,
    titel: 'عنوان4',
    subtitle: 'عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص عنوان ثانوي نص '
  },
];

export default function ImageSlider() {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  // Function to show the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full mx-auto">
      <div
        className="relative h-[80vh] group"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 ease-in-out cursor-pointer"
        />
        <div className="absolute left-1/3 top-1/2 text-white transform -translate-y-1/2  bg-gradient-to-r from-[#f5ba453b] to-[#497b3b80] p-4 rounded-2xl">
          <h2 className="text-3xl m-8 font-bold">{images[currentIndex].titel}</h2>
          <p>{images[currentIndex].subtitle}</p>
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927b5] text-white p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-white" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927b5] text-white p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-white" />
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
              } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
