"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      image: '/Image-1.jpg',
      title: 'Serene Minds',
      subtitle: 'Unlock the power of your mind through meditation.',
      description: 'Embrace the present, find inner peace.',
    },
    {
      image: '/Image-2.jpg',
      title: 'Mindful Moments',
      subtitle: 'Unlock the power of your mind through meditation.',
      description: 'Embrace the present, find inner peace.',
    },
    {
      image: '/Image-3.jpg',
      title: 'Peaceful Reflections',
      subtitle: 'Cultivate a tranquil mind, one breath at a time.',
      description: 'Discover the serenity within.',
    },
    {
      image:'/Image-4.jpg',
      title: 'Soulful Serenity',
      subtitle :'Find peace in the depths of your soul',
      description : 'Calm the storm, still the waters',
  }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="flex h-full transition-transform duration-500 ease-in-out">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full h-full ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-fill"
                style={{
                  filter: 'brightness(0.8) contrast(1.2) saturate(1.2)',
                }}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                <p className="text-2xl italic">{item.subtitle}</p>
                <p className="text-lg font-bold mt-4">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          className=" px-4 py-2 rounded-md cursor-pointer "
          onClick={handlePrevClick}
        >
          <svg className="w-[34px] h-[34px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="m15 19-7-7 7-7"/>
</svg>
          

        </button>
        <button
          className="px-4 py-2 rounded-md cursor-pointer "
          onClick={handleNextClick}
        >
<svg className="w-[34px] h-[34px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="m9 5 7 7-7 7"/>
</svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;