import Container from "../ui/Container";
import Title from "../ui/Title";
import ProductFilter from "./ProductFilter"

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
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Stationery",
    description: "Grade 4 - 2025 Stationery Hamper",
    price: "70",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    title: "Stationery",
    description: "Grade 4 - 2025 Stationery Hamper",
    price: "30.00",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    title: "Stationery",
    description: "Grade 4 - 2025 Stationery Hamper",
    price: "100.00",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/150",
    title: "Stationery",
    description: "Grade 4 - 2025 Stationery Hamper",
    price: "2300.00",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/150",
    title: "Stationery",
    description: "Grade 4 - 2025 Stationery Hamper",
    price: "2300.00",
  },
  // Add more products here
];


const Orders = () => {
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
        <ProductFilter products={products} />
      </div>
    </Container>
  )
}

export default Orders