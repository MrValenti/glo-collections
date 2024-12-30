import Container from "./Container";
import FeaturedProduct from "./FeaturedProduct";
import Title from "./Title";
import img01 from "../assets/img/women-3.jpeg"
import Carousel from "react-multi-carousel";
import CustomRightArrow from "./CustomRightArrow";
import CustomLeftArrow from "./CustomLeftArrow";

const products = [
  {
    id: 1,
    image: img01,
    title: "Ladies",
    description: "La DoubleJ - La Scala Herald jacquard",
    price: "2500.00",
  },
  {
    id: 2,
    image: img01,
    title: "Platters & Sweets",
    description: "Sweet Platter.",
    price: "1800.00",
  },
  {
    id: 3,
    image: img01,
    title: "Cakes",
    description: "Lux Chocolate lovers Ganache Cake.",
    price: "900.00",
  },
  {
    id: 4,
    image: img01,
    title: "Stationery",
    description: "Grade 4 - 2025 Stationery Hamper",
    price: "2300.00",
  },
  {
    id: 5,
    image: img01,
    title: "Stationery",
    description: "Grade 4 - 2025 Stationery Hamper",
    price: "2300.00",
  },
  {
    id: 6,
    // image: "https://via.placeholder.com/150",
    image: img01,
    title: "Stationery",
    description: "Grade 4 - 2025 Stationery Hamper",
    price: "2300.00",
  },

  // Add more products here
];

const responsive = {
  superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
  },
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
  },
};


const FeaturedProducts = () => {
  return (
    <Container>
      <div className="mb-10">
        <div className="flex justify-between">
          <div className="text-center w-full">
            <Title text="Featured Products" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>
      {/* <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <FeaturedProduct key={product.id} product={product} />
        ))}
      </div> */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        transitionDuration={1000}
        // className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative"
        // className="flex flex-wrap px-40 lg:px-40"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
      
        {products.map((product) => (
          <FeaturedProduct key={product.id} product={product} />
        ))}
    

      </Carousel>
    </Container>

  );
};

export default FeaturedProducts;
