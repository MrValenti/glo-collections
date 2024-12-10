import Container from "./Container";
import { Link } from "react-router-dom";
import playStoreLogo from "../assets/playstore-logo.png";
import appStoreLogo from "../assets/appstore-logo.png";
import facebookLogo from "../assets/facebook-logo.png";
import instagramLogo from "../assets/instagram-logo.png";
import xLogo from "../assets/x-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";

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
              <div className="flex justify-center items-center space-x-2">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="w-[350px] flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white text-lg font-medium rounded-full w-32 py-2 hover:bg-blue-600 transition duration-200"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3">
          {/* First Column */}
          <div className="text-gray-300">
            <p>
              <Link to={"/"}>Customer Service</Link>
            </p>
            <p>
              <Link to={"/"}>Contact Us</Link>
            </p>
            <p>
              <Link to={"/"}>Gift Card & Store Credit</Link>
            </p>
            <p>
              <Link to={"/"}>Payment</Link>
            </p>
            <p>
              <Link to={"/"}>Shipping</Link>
            </p>
            <p>
              <Link to={"/"}>Returns & Exchanges</Link>
            </p>
          </div>

          {/* Second Column */}
          <div className="text-gray-300">
            <p>
              <Link to={"/"}>About us</Link>
            </p>
            <p>
              <Link to={"/"}>Sustainability</Link>
            </p>
            <p>
              <Link to={"/"}>Press & Events</Link>
            </p>
            <p>
              <Link to={"/"}>Careers</Link>
            </p>
            <p>
              <Link to={"/"}>Investor Relations</Link>
            </p>
            <p>
              <Link to={"/"}>Affiliates</Link>
            </p>
            <p>
              <Link to={"/"}>Vendors / Artists</Link>
            </p>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-end text-gray-300">
            <p className="mb-4 text-sm font-medium text-right">
              Shop anywhere, anytime with the App
            </p>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4"
            >
              <img
                src={playStoreLogo}
                alt="Google Play Store"
                className="w-32 h-auto"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6"
            >
              <img
                src={appStoreLogo}
                alt="Apple App Store"
                className="w-32 h-auto"
              />
            </a>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebookLogo}
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramLogo}
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={xLogo}
                  alt="X (formerly Twitter)"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinLogo}
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterTop;
