
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const carouselItems = [
  {
    id: 1,
    title: "Legal Support & Protection",
    description: "Providing comprehensive legal aid and advocacy for women's rights",
    image: "/images/carousel-1.png",
  },
  {
    id: 2,
    title: "Stop Child Marriage",
    description: "Taking decisive action against child marriages in our communities",
    image: "/images/carousel-2.jpg",
  },
  {
    id: 3,
    title: "Empowering Women in Rural Nepal",
    description: "Promoting gender equality and women's rights in Janakpur and beyond",
    image: "/images/carousel-3.png",
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden hero-section">
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 md:px-8 z-10 max-w-4xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {carouselItems[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              {carouselItems[currentSlide].description}
            </p>
            <Link
              to="/donate"
              className="donation-button inline-block text-base px-4 py-2"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
