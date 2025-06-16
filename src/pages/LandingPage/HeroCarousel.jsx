import React, { useState, useEffect, useRef } from "react";
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay } from "react-icons/lu";

import HERO_IMG_1 from "../../assets/hero-img-02.png";
import HERO_corefit_1 from "../../assets/hero-corefit.webp";
import HERO_corefit_2 from "../../assets/hero-corefit-2.webp";

import HERO_cablefit from "../../assets/hero-cablefit.webp";
import { Navigate, useNavigate } from "react-router-dom";
import { Cat_1_Products } from "../../utils/data";


const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  const navigate=useNavigate()

  const slides = [
     {
      id: 1,
      title: "Corfit - Underground Double Wall Corrugated pipes",
      description:
        "Corfit DWC* Pipes and fittings are manufactured using HDPE polymer. These pipes are resistant to various types of gases & chemicals which are generated due to putrefaction of various ingredients flowing in the system.",
      image: HERO_corefit_2,
      bgColor: "from-blue-50 via-slate-50 to-blue-100",
     
    },
    {
      id: 2,
      title: "Flowguard Plus- CPVC Hot and Cold Portable Water Plumbing System",
      description:
        "Invented in 1959, used all over the world, established as a trusted product and now brought to you by Prince Pipes, FlowGuard Plus CPVC plumbing systems are built to last for generations. ",
      image: HERO_IMG_1,
      bgColor: "from-slate-50 via-blue-50 to-slate-100",
    },
   
    {
      id: 3,
      title: "Cablefit - HDPE Cable ducting pipes",
      description:
        "Infrastructure in India is seeing new avenues on daily basis. With multiple innovations happening across sectors and wiring being involved in almost all sectors, cable ducting becomes an essential investment in protecting wires across applications. ",
      image: HERO_cablefit,
      bgColor: "from-slate-100 via-gray-50 to-slate-50",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, slides.length]);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch/mouse handlers for swipe functionality
  const handleStart = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    setDragStart(clientX);
  };

  const handleMove = (e) => {
    if (!isDragging) return;

    const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    const diff = clientX - dragStart;
    setDragOffset(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;

    const threshold = 100;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setIsAutoPlaying(true);
  };

  // Enhanced Pipe Visualization with more realistic 3D effect
  const PipeVisualization = ({ variant, isActive }) => {
    const pipeConfigs = {
      pipes1: { count: 9, arrangement: "grid" },
      pipes2: { count: 7, arrangement: "circular" },
      pipes3: { count: 11, arrangement: "cascade" },
    };

    const config = pipeConfigs[variant] || pipeConfigs.pipes1;
    const pipes = Array.from({ length: config.count });

    return (
      <div className="relative w-full h-full flex items-center justify-center perspective-1000">
        <div
          className={`relative transition-all duration-1000 ${
            isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"
          }`}
          style={{
            transform: `rotateX(10deg) rotateY(15deg) ${
              isActive ? "translateZ(0)" : "translateZ(-50px)"
            }`,
          }}
        >
          {config.arrangement === "grid" && (
            <div className="grid grid-cols-3 gap-6 transform rotate-12">
              {pipes.map((_, index) => (
                <PipeElement key={index} index={index} delay={index * 0.1} />
              ))}
            </div>
          )}

          {config.arrangement === "circular" && (
            <div className="relative w-80 h-80">
              {pipes.map((_, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${
                      index * (360 / config.count)
                    }deg) translateY(-120px)`,
                  }}
                >
                  <PipeElement index={index} delay={index * 0.15} />
                </div>
              ))}
            </div>
          )}

          {config.arrangement === "cascade" && (
            <div className="flex items-end space-x-3">
              {pipes.map((_, index) => (
                <div
                  key={index}
                  style={{
                    transform: `translateY(${index * -20}px) rotateZ(${
                      index * 5
                    }deg)`,
                  }}
                >
                  <PipeElement index={index} delay={index * 0.08} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: isActive ? 0.4 : 0.1,
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  const PipeElement = ({ index, delay }) => (
    <div
      className="relative group cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-14 h-56 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-full relative overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-3">
        {/* Corrugated rings */}
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-3 bg-gray-700 opacity-70 shadow-inner"
            style={{ top: `${i * 5.5}%` }}
          />
        ))}

        {/* Inner blue lining */}
        <div className="absolute inset-2 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-inner">
          <div className="absolute inset-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-90" />
          <div className="absolute top-2 left-1/2 w-1 h-full bg-gradient-to-b from-blue-300 to-transparent rounded-full opacity-50" />
        </div>

        {/* Highlight */}
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-white via-white to-transparent opacity-20 rounded-full" />

        {/* Reflection */}
        <div className="absolute top-0 right-1/4 w-1 h-1/2 bg-gradient-to-b from-white to-transparent opacity-30 rounded-full" />
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-[calc(100vh-70px)] overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Main carousel container */}
      <div
        ref={carouselRef}
        className="relative w-full h-full"
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        {/* Slides wrapper */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(${-currentSlide * 100 + dragOffset / 10}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex-shrink-0 w-full h-full bg-gradient-to-br ${slide.bgColor} relative`}
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

              <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
                  {/* Content */}
                  <div
                    className={`space-y-8 transition-all duration-1000 ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : "opacity-60 translate-x-8"
                    }`}
                  >
                    <div className="mb-4">
                      <h1 className="text-4xl lg:text-4xl font-semibold text-[#1A4B7B] leading-tight">
                        {slide.title.split(" ").map((word, wordIndex) => (
                          <span
                            key={wordIndex}
                            className="inline-block mr-4 transition-all duration-500"
                            style={{
                              animationDelay: `${wordIndex * 0.1}s`,
                              transform:
                                index === currentSlide
                                  ? "translateY(0)"
                                  : "translateY(20px)",
                            }}
                          >
                            {word}
                          </span>
                        ))}
                      </h1>

                      <p className="text-lg lg:text-base text-[#1A4B7B] leading-relaxed max-w-2xl mt-3">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex items-center ">
                      <button onClick={()=>{
                        navigate('/products',{})
                      }} className="bg-black text-white px-8 py-2.5 rounded-md font-medium text-base hover:bg-slate-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                        Know More
                      </button>

                      {/* <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
                      >
                        {isAutoPlaying ? <LuPause className="w-5 h-5" /> : <LuPlay className="w-5 h-5" />}
                      </button> */}
                    </div>
                  </div>

                  {/* Pipe Visualization */}
                  {/* <div className="relative h-96 lg:h-[65vh]"> */}
                  <div className={`space-y-8 transition-all duration-1000 ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : "opacity-60 translate-x-8"
                    }`}>
                    <img src={slide.image}  alt="" className="relative h-96 lg:h-[85vh]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 group backdrop-blur-sm"
      >
        <LuChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 group backdrop-blur-sm"
      >
        <LuChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Enhanced pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-linear-to-r from-sky-500  to-cyan-400 w-10 h-3"
                  : "bg-sky-100 hover:bg-sky-100 w-3 h-3"
              }`}
            />
          ))}
        </div>

        <div className="text-xs font-medium text-slate-600 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-sky-50 z-20">
        <div
          className="h-full bg-linear-to-r from-sky-500  to-cyan-400 transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
