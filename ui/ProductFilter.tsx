import { useState } from "react";

const ProductFilter = () => {
  // State for filters
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    designer: "",
    color: "",
    pattern: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-6">
      {/* Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 mb-8">
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="border rounded p-2 shadow-sm ring-1 ring-inset ring-gray-300"
        >
          <option value="">Categories</option>
          <option value="clothing">Clothing</option>
          <option value="food">Food</option>
        </select>
        <select
          name="size"
          value={filters.size}
          onChange={handleChange}
          className="border rounded p-2 shadow-sm ring-1 ring-inset ring-gray-300"
        >
          <option value="">Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
        </select>
        <select
          name="designer"
          value={filters.designer}
          onChange={handleChange}
          className="border rounded p-2 shadow-sm ring-1 ring-inset ring-gray-300"
        >
          <option value="">Designer</option>
          <option value="designer1">Designer 1</option>
          <option value="designer2">Designer 2</option>
        </select>
        <select
          name="color"
          value={filters.color}
          onChange={handleChange}
          className="border rounded p-2 shadow-sm ring-1 ring-inset ring-gray-300"
        >
          <option value="">Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
        <select
          name="color"
          value={filters.color}
          onChange={handleChange}
          className="border rounded p-2 shadow-sm ring-1 ring-inset ring-gray-300"
        >
          <option value="">Pattern</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
        <select
          name="color"
          value={filters.color}
          onChange={handleChange}
          className="border rounded p-2 shadow-sm ring-1 ring-inset ring-gray-300"
        >
          <option value="">Sort by</option>
          <option value="red">Newest</option>
          <option value="blue">Price Low - High</option>
          <option value="blue">Price High - Low</option>
        </select>
      </div>

      {/* Product Listing */}
    </div>
  );
};

export default ProductFilter;
