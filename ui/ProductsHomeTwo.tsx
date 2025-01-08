import Container from "./Container";
import ProductHomeTo from "./ProductHomeTo";
// import Title from "./Title";
// import img01 from "../assets/img/women-3.jpeg"

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Ladies",
    description: "La DoubleJ - La Scala Herald jacquard top",
    price: "2500.00",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Platters & Sweets",
    description: "Sweet Platter.",
    price: "1800.00",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Cakes",
    description: "Lux Chocolate lovers Ganache Cake.",
    price: "900.00",
  },
  
  // Add more products here
];

const ProductsHomeTwo = () => {
  return (
    <Container>
      {/* <div className="mb-10">
        <div className="flex justify-between">
          <div className="text-center w-full">
            <Title text="Featured Products" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div> */}
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <ProductHomeTo key={product.id} product={product} />
        ))}
      </div>
    </Container>

  );
};

export default ProductsHomeTwo;
