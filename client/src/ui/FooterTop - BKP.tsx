// import { IoSave, IoSearchOutline } from "react-icons/io5";
import Container from "./Container"
import { Link } from "react-router-dom";

const FooterTop = () => {
  
  
  return (
    <Container className="py-0">
      <div className="rounded-2xl bg-[#000] px-6 py-16 sm:p-16 text-whiteText">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Join our newsletter for access to trends, pre-shopping, and more
            </h2>
            <div className="h-[20px]"></div>
            <div className="text-center">
              <input
                type="text"
                placeholder="Your Email Address"
                className="w-[350px] flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3">
          <div className="text-gray-300">
            <p><Link to={"/"}>Customer Service</Link></p>
            <p><Link to={"/"}>Contact Us</Link></p>
            <p><Link to={"/"}>Gift Card & Store Credit</Link></p>
            <p><Link to={"/"}>Payment</Link></p>
            <p><Link to={"/"}>Shipping</Link></p>
            <p><Link to={"/"}>Returns & Exchanges</Link></p>
          </div>
          <div className="text-gray-300">
            <p><Link to={"/"}>About us</Link></p>
            <p><Link to={"/"}>Sustainability</Link></p>
            <p><Link to={"/"}>Press & Events</Link></p>
            <p><Link to={"/"}>Careers</Link></p>
            <p><Link to={"/"}>Investor Relations</Link></p>
            <p><Link to={"/"}>Affiliates</Link></p>
            <p><Link to={"/"}>Vendors / Artists</Link></p>
          </div>
        </div>
        {/* <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3">
          {incentives.map((item) => (
            <div
              key={item?.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className=" sm:flex-shrink-0">

                <div className="flex-root">
                  <img
                    src={item?.imageSrc}
                    alt="image"
                    className="mx-auto h-16 w-16"
                  />
                </div>
              </div>
              <div className="mt-3 sm:ml-6 lg:ml-0">
                <h3 className="text-base font-medium text-gray-900">
                  {item?.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </Container>
  );
};

export default FooterTop