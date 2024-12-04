import React from "react";
import Slider from "react-slick";

const HeaderSlider = () => {
  const sliderSettings = {
    dots: true, // Enable pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable navigation arrows
  };

  const slides = [
    {
      id: 1,
      image: "https://via.placeholder.com/1600x600?text=Slide+1",
      caption: "Slide 1 Caption",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/1600x600?text=Slide+2",
      caption: "Slide 2 Caption",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/1600x600?text=Slide+3",
      caption: "Slide 3 Caption",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 text-white text-center py-5">
        <h1 className="text-3xl font-bold">My React App</h1>
      </header>

      {/* Slider */}
      <div className="w-full h-[600px] relative overflow-hidden">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div
                className="w-full h-[600px] bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-white text-xl md:text-3xl">{slide.caption}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeaderSlider;
