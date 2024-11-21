import Container from "./Container";
import ProductHome from "./ProductHome";
import Title from "./Title";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Mobile Cold Room",
    description: "Jax Wax - Gilders Paste - 1kg Tins - Black.",
    price: "2500.00",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Portable Kitchen",
    description: "Jax Wax - Gilders Paste - 1kg Tins - Black.",
    price: "1800.00",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Portable Kitchen",
    description: "Jax Wax - Gilders Paste - 1kg Tins - Black.",
    price: "900.00",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Portable Kitchen",
    description: "Jax Wax - Gilders Paste - 1kg Tins - Black.",
    price: "2300.00",
  },
  // Add more products here
];

const ProductListHome = () => {
  return (
    <Container>
      <div className="mb-10">
        <div className="flex justify-between">
          <div className="text-center w-full">
          
            <Title text="Featured Categories" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <ProductHome key={product.id} product={product} />
        ))}
      </div>
    </Container>

  );
};

export default ProductListHome;
