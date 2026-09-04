import React from 'react';

interface OpeningBannerProps {
  title?: string;
  backgroundImageSrc?: string;
}

export default function OpeningBanner({
  title,
  backgroundImageSrc,
}: OpeningBannerProps) {
  return (
    
    <section className="relative w-full min-h-[75dvh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Image Container */}
    <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 opacity-100 filter saturate-[0.25]"
          style={{ backgroundImage: `url(${backgroundImageSrc})` }}
        />
      <section className="relative w-full py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-row items-center justify-center gap-6 sm:gap-40">
        {/* Logo Graphic Placeholder */}
        <div className="w-full h-full sm:w-64 md:w-64 min-w-[60px] flex items-center pt-16 flex-shrink-0 z-0">
          <img
            src="/icons/logo.svg"
            alt="Team Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        

        {/* Title Text Element */}
        <div className="relative inline-grid grid-cols-1 grid-rows-1 place-items-start leading-none select-none font-['Roadrunners',serif] italic font-normal text-[clamp(30px,6vw,1000px)]">
  {/* Red Stroke Layer (Bottom) */}
  <span
    aria-hidden="true"
    className="col-start-1 row-start-1 text-transparent [-webkit-text-stroke:0.2em_#b32424]"
  >
    {title}
  </span>

  {/* Black Stroke Layer (Middle) */}
  <span
    aria-hidden="true"
    className="col-start-1 row-start-1 text-transparent [-webkit-text-stroke:0.1em_black]"
  >
    {title}
  </span>

  {/* Main White Text (Top) */}
  <p className="col-start-1 row-start-1 text-[#e6e6e6]">
    {title}
  </p>
</div>
      </section>
    </section>
  );
}