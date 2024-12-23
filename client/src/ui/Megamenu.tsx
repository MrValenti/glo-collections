import { useState } from 'react';

const MegaMenu = () => {
  const [open, setOpen] = useState(false);

  const categories = [
    {
      title: 'Electronics',
      subcategories: ['Phones', 'Laptops', 'Headphones', 'Cameras'],
    },
    {
      title: 'Home Appliances',
      subcategories: ['Refrigerators', 'Washing Machines', 'Microwaves', 'Air Conditioners'],
    },
    {
      title: 'Fashion',
      subcategories: ['Men', 'Women', 'Kids', 'Accessories'],
    },
    {
      title: 'Books',
      subcategories: ['Fiction', 'Non-fiction', 'Comics', 'Magazines'],
    },
  ];

  return (
    <div className="relative">
      <button
        className="text-white py-2 px-4 bg-blue-500 rounded-md"
        onClick={() => setOpen(!open)}
      >
        Categories
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg z-10">
          <div className="grid grid-cols-4 gap-4 p-6">
            {categories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-lg">{category.title}</h3>
                <ul className="space-y-2">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex} className="text-gray-700 hover:text-blue-500">
                      {subcategory}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
