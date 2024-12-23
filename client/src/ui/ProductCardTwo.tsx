import Container from "./Container";
import Title from "./Title";
import Img01 from "../assets/newarrivals/img01.png"
import Img02 from "../assets/newarrivals/img02.png"

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "De Salvo Full Size Classical Guitar – Natural",
      price: "R15 000",
      description: "Exclusively in South Africa",
      edition: "Student Pack Edition, 2025",
      additionalInfo: "excl. duties, taxes, and shipping costs",
      image: Img01, // Replace with your actual product image URL
    },
    {
      id: 2,
      name: "Premium Acoustic Guitar – Black",
      price: "R12 500",
      description: "Limited Edition for Professionals",
      edition: "Elite Pack Edition, 2025",
      additionalInfo: "Incl. shipping within South Africa",
      image: Img02, // Replace with your actual product image URL
    },
    {
      id: 3,
      name: "Classic Electric Guitar – White",
      price: "R20 000",
      description: "Perfect for Studio Sessions",
      edition: "Pro Pack Edition, 2025",
      additionalInfo: "Shipping charges apply",
      image: "https://via.placeholder.com/300x200", // Replace with your actual product image URL
    },
    {
      id: 4,
      name: "Vintage Bass Guitar – Red",
      price: "R18 000",
      description: "A true collector's item",
      edition: "Vintage Pack Edition, 2025",
      additionalInfo: "Taxes excluded",
      image: "https://via.placeholder.com/300x200", // Replace with your actual product image URL
    },
  ];

  // Just take the first two products
  const displayedProducts = products.slice(0, 2);

  return (
    <Container>
      <div className="mb-10">
        <div className="flex justify-between">
          <div className="text-center w-full">
            <Title text="New Arrivals" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>

      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product, index) => (
              <div
                key={product.id || index}
                className={`p-6 shadow-md ${
                  index % 2 === 0 ? "bg-yellow-400" : "bg-blue-400"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-black font-bold">{product.description}</span>
                  <span className="text-black font-bold">{product.edition}</span>
                </div>
                <div className="bg-gray-200 p-4 mb-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full h-40"
                  />
                </div>
                <div
                  className={`p-4 text-black flex justify-between items-center ${
                    index % 2 === 0 ? "bg-yellow-300" : "bg-blue-300"
                  }`}
                >
                  <span className="font-medium">{product.name}</span>
                  <span className="font-bold">{product.price}</span>
                </div>
                <p className="text-xs mt-1 text-gray-600">{product.additionalInfo}</p>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default NewArrivals;
