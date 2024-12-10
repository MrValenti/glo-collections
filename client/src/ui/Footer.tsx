//import Container from "./Container";
// import { payment } from "../assets";
import FooterTop from './FooterTop';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-10 bg-darkText text-whiteText">
      <FooterTop />
      <div className="text-center text-sm">
        <Link to={"/"} style={{ fontSize: "18px" }}>Terms of Use</Link> |
        <Link to={"/"} style={{ fontSize: "18px" }}> Privacy Policy</Link> |
        <Link to={"/"} style={{ fontSize: "18px" }}> Imprints</Link>
        <div></div>
        <p>Copyright © 2024 glocollections.co.za. All rights reserved.</p>
      </div>
      
      {/* <Container className="flex flex-col md:flex-row text-center gap-4 justify-between">
        
         <p>Copyright © 2024 glocollections.co.za. All rights reserved.</p> 
         <img src={payment} alt="payment-img" className="object-cover" /> 
      </Container> */}
    </div>
  )
}

export default Footer
