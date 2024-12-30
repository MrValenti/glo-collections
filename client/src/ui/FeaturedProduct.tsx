import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  title: string;
  price: string | number;
  image: string;
  description: string;
}

const FeaturedProduct = ({ product }: { product: ProductProps }) => {
  return (
    <div className="p-4">
    <Link to="#"
    // className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
    
    >
      <div className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src={product.image}
          alt={product.title}
        />
        <div className="p-4">
          {/* <h3 className="text-lg font-bold text-gray-800">{product.title}</h3> */}
          <p className="text-sm text-gray-900 mt-2">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-600 mt-2">
            excl. duties, taxes, and shipping costs
            </span>
            {/* <button className="bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
              Add to Cart
            </button> */}
            <span className="text-lg font-semibold text-gray-800">R{product.price}</span>
            
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default FeaturedProduct;
