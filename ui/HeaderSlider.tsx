import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img01 from "/src/assets/homeBanner.jpg"
import ContainerBanner from './ContainerBanner'
import LinkButton from "./LinkButton";

const HeaderSlider = () => {
    const sliderSettings = {
        dots: true, // Enables pagination dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Enables navigation arrows
    };

    const slides = [
        {
            id: 1,
            image: img01,
            caption: "Slide 1 Caption",
            description: "The new tech gift you are wishing for right here.",
        },
        {
            id: 2,
            image: img01,
            caption: "Slide 2 Caption",
            description: "The new tech gift you are wishing for right here.",
        },
        {
            id: 3,
            image: img01,
            //   image: "https://via.placeholder.com/1600x600?text=Slide+3",
            caption: "Slide 3 Caption",
            description: "The new tech gift you are wishing for right here.",
        },
        {
            id: 4,
            image: img01,
            //   image: "https://via.placeholder.com/1600x600?text=Slide+3",
            caption: "Slide 4 Caption",
            description: "The new tech gift you are wishing for right here.",
        },
        {
            id: 5,
            image: img01,
            //   image: "https://via.placeholder.com/1600x600?text=Slide+3",
            caption: "Slide 5 Caption",
            description: "The new tech gift you are wishing for right here.",
        },
        {
            id: 6,
            image: img01,
            //   image: "https://via.placeholder.com/1600x600?text=Slide+3",
            caption: "Slide 6 Caption",
            description: "The new tech gift you are wishing for right here.",
        },{
            id: 7,
            image: img01,
            //   image: "https://via.placeholder.com/1600x600?text=Slide+3",
            caption: "Slide 7 Caption",
            description: "The new tech gift you are wishing for right here.",
        },{
            id: 8,
            image: img01,
            //   image: "https://via.placeholder.com/1600x600?text=Slide+3",
            caption: "Slide 8 Caption",
            description: "The new tech gift you are wishing for right here.",
        },

    ];

    return (
        <div>
            {/* Header */}

            {/* Slider */}
            <div style={{ width: "100%", height: "600px", overflow: "hidden" }}>
                <Slider {...sliderSettings}>
                    {slides.map((slide) => (
                        <div key={slide.id}>
                            <div
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    width: "100%",
                                    height: "600px",
                                }}
                            >
                                <ContainerBanner>
                                    <div className="w-full h-[600px] bg-cover bg-center">

                                    <div className="absolute inset-0 flex flex-col justify-center px-10">
                                        <h2 className="text-xl md:text-4xl lg:text-6xl text-whiteText font-bold">
                                            {slide.caption}
                                        </h2>
                                        <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[250px] mt-4">
                                           {slide.description} 
                                        </p>
                                        <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mt-4" />
                                    </div>
                                    
                                    </div>
                                    
                                </ContainerBanner>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HeaderSlider;