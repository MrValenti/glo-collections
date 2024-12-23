import { useEffect, useState } from "react";
import { logo } from '../assets'
import { Link } from "react-router-dom";
import { IoClose, IoSearchOutline } from 'react-icons/io5'
import { FiShoppingCart, FiStar, FiUser } from "react-icons/fi";
// import Container from "./Container";
// import { FaChevronDown } from "react-icons/fa6";
import { FiAlignLeft } from "react-icons/fi";
import { config } from '../../config';
import { getData } from "../lib";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
// import { ProductProps } from "../../type";
import { CategoryProps, ProductProps } from "../../type";
// import Dropdown from "./dropdown";
// import MegaMenu from "./Megamenu";
import Megamenu from "../megamenu-ui/Megamenu";


// const bottomNavigationTwo = [
//   { title: "Home", link: "/" },
//   {
//     title: "Products",
//     link: "/products",
//     subMenu: [
//       { title: "Beverages", link: "/beverages", description: "pro pproduct new and newnoe" },
//       { title: "Fragrances", link: "/fragrances", description: "pro pproduct new and newnoe" },
//       { title: "Accessories", link: "/accessories", description: "pro pproduct new and newnoe" },

//     ],
//   },
//   {
//     title: "BEVERAGES", link: "/category",
//     subMenu: [
//       { title: "Beverages", link: "/beverages", description: "pro pproduct new and newnoe" },
//       { title: "Fragrances", link: "/fragrances", description: "pro pproduct new and newnoe" },
//       { title: "Accessories", link: "/accessories", description: "pro pproduct new and newnoe" },

//     ],
//   },
//   { title: "FRAGRANCES", link: "/category" },
//   { title: "AFRICAN GARMETS", link: "/category" },
//   { title: "FOOTWARE", link: "/footware" },
//   { title: "HOMEWARE", link: "/homeware" },
//   { title: "ACCESSORIES", link: "/accessories" },
//   { title: "APPAREL", link: "/apparel" },
//   { title: "AFRICAN CRAFTS", link: "/african-crafts" },
//   { title: "CONFECTIONERY", link: "/confectionary" },
// ];

// const bottomNavigation = [
//   { title: "Home", link: "/" },
//   { title: "BEVERAGES", link: "/category" },
//   { title: "FRAGRANCES", link: "/category" },
//   { title: "AFRICAN GARMETS", link: "/category" },
//   { title: "FOOTWARE", link: "/footware" },
//   { title: "HOMEWARE", link: "/homeware" },
//   { title: "ACCESSORIES", link: "/accessories" },
//   { title: "APPAREL", link: "/apparel" },
//   { title: "AFRICAN CRAFTS", link: "/african-crafts" },
//   { title: "CONFECTIONERY", link: "/confectionary" },
//   // { title: "HEALTH & BEAUTY", link: "/blog" },
//   // { title: "ELECTRONICS", link: "/blog" },
//   // { title: "OFFICE & STATIONERY", link: "/blog" },
// ];

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/products`;
      try {
        const data = await getData(endpoint);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  //console.log('product', products);


  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const data = await getData(endpoint);
        setCategories(data);

      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  console.log('from search:', searchText);

  useEffect(() => {
    const filtered = products.filter((item: ProductProps) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
    // console.log('filtered ish', filtered);
  }, [searchText]);

  return (
    <div className="w-full bg-whiteText md:sticky md:top-0 z-50">
      <div className='max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0'>
        {/**Logo */}
        <Link to={'/'}>
          <img src={logo} alt="Logo" className='22' />
        </Link>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md border border-white hover:border-white py-1.5 px-3 font-semibold text-black hover:bg-gray-900 hover:text-white">
            <FiAlignLeft className="text-base mt-1" />Categories
          </MenuButton>

          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
            >
              {categories.map((item: CategoryProps) => (
                <MenuItem key={item?._id}>
                  <Link
                    to={`/category/${item?._base}`}
                    className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                  >
                    <img
                      src={item?.image}
                      alt="categoryImage"
                      className="w-6 h-6 rounded-md"
                    />
                    {item?.name}
                  </Link>
                </MenuItem>
              ))}
            </MenuItems>
          </Transition>
        </Menu>
        {/**Search Bar */}
        <div className="hidden md:inline-flex max-w-3xl w-full relative">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search products..."
            className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
          />
          {searchText ? (
            <IoClose
              onClick={() => setSearchText("")}
              className='absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200'
            />
          ) : (
            <IoSearchOutline className='absolute top-2.5 right-4 text-xxl cursor-pointer ' />

          )}

        </div>
        {/*Search results will go here*/}
        {searchText && (
          <div className="absolute left-0 top-20 w-full mx-auto max-h-[500px] px-10 py-5 bg-white z-20 overflow-y-scroll text-black shadow-lg shadow-skyText scrollbar-hide">
            {filteredProducts.length > 0 ? <div> produucts </div> : <div>
              <p className="text-xl font-normal">Nothing matches with your search keywords
                <span className="underline underline-offset-2 decoration-[1px] text-red-500 font-semibold">{`(${searchText})`} </span>
                PLease try again</p>
            </div>}
          </div>
        )}

        {/**Right Bar */}
        <div className="flex items-center gap-x-6 text-2xl">

          <Link to={'/Profile'} title="Login here">
            <FiUser className="hover:text-skyText duration-200 cursor-pointer" />
          </Link>

          <Link to={'/favorite'} className="relative block">
            <FiStar className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-greenText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </Link>
          <Link to={'/cart'} className="relative block">
            <FiShoppingCart className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-greenText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              0
            </span>
          </Link>
        </div>
        {/**Menubar */}
      </div>
      <div className="w-full bg-darkText text-whiteText">
        {/* 
        #################Original text
        <Container className="py-2 flex items-center gap-5 justify-between">



          {
            bottomNavigation.map(({ title, link }) => (
              <Link to={link} key={title}
                className="uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-whiteText duration-200 relative overflow-hidden group">
                {title}
                <span 
                className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" 
                />
              </Link>
            ))
          }
        </Container> */}

        <div>

          {/* NEw VVVAA@@@@@@@############### */}
          <Megamenu />
          {/* <Dropdown /> */}
          {/* <MegaMenu /> */}
          {/* New NAV END$$$$$$$$$$$$$$$$###### */}

        </div>
      </div>
    </div>
  )
}

export default Header