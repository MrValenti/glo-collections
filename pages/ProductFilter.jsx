import { useState } from "react";

const ProductFilter = ({ products }) => {
    const [filters, setFilters] = useState({
        category: "All",
        price: "All",
    });

    const categories = [...new Set(products.map((product) => product.category))];
    const priceRanges = ["All", "Below $50", "$50 - $100", "Above $100"];

    const filterProducts = () => {
        return products.filter((product) => {
            const matchesCategory =
                filters.category === "All" || product.category === filters.category;
            const matchesPrice =
                filters.price === "All" ||
                (filters.price === "Below $50" && product.price < 50) ||
                (filters.price === "$50 - $100" && product.price >= 50 && product.price <= 100) ||
                (filters.price === "Above $100" && product.price > 100);
            return matchesCategory && matchesPrice;
        });
    };

    const filteredProducts = filterProducts();

    return (
        <div className="p-4">
            <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
                <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="border border-gray-300 p-2 rounded mb-4 md:mb-0"
                >
                    <option value="All">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <select
                    value={filters.price}
                    onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                    className="border border-gray-300 p-2 rounded"
                >
                    {priceRanges.map((range) => (
                        <option key={range} value={range}>
                            {range}
                        </option>
                    ))}
                </select>
            </div>

            <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4"
            // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4"
            
            >
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (

                        <div
                            key={product.id}
                            className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                className="w-full h-48 object-cover"
                                src={product.image}
                                alt=""
                            />
                            <div className="p-4">
                                <p className="text-sm text-gray-600 mt-2">product.description</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-semibold text-gray-800">
                                        ${product.price}
                                    </span>
                                    <button className="bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))
                ) : (
                    <p className="col-span-full text-center">No products found.</p>
                )}
            </div>


        </div>
    );
};

export default ProductFilter;