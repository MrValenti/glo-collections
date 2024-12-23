import BannerCategories from "./ui/BannerCategories"
// import Container from "./ui/Container"
// import Footer from "./ui/Footer"
// import Header from "./ui/Header"
import 'react-multi-carousel/lib/styles.css';
// import HomeBanner from "./ui/HomeBanner";
import Highlights from "./ui/Highlights";
import Categories from "./ui/Categories";
import ProductListHome from './ui/ProductListHome';
import HeaderSlider from "./ui/HeaderSlider";
import ProductCardTwo from "./ui/ProductCardTwo";
import NewArrivals from "./ui/NewArrivals";

function App() {

  return (
    <main>
      <HeaderSlider />
      {/* <HomeBanner /> */}
      <ProductListHome />
      <NewArrivals />
      <ProductCardTwo />
      <Highlights />
      <Categories />
      <BannerCategories />
      
      {/*<BannerCategories />
      
      
       <Container>
        <p>Ecommerce Demo</p>
      </Container> */}
    </main>
  )
}

export default App
