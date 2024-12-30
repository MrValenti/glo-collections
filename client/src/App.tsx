// import BannerCategories from "./ui/BannerCategories"
// import Container from "./ui/Container"
// import Footer from "./ui/Footer"
// import Header from "./ui/Header"
import 'react-multi-carousel/lib/styles.css';
// import HomeBanner from "./ui/HomeBanner";
import Highlights from "./ui/Highlights";
// import Categories from "./ui/Categories";
import FeaturedProducts from './ui/FeaturedProducts';
import HeaderSlider from "./ui/HeaderSlider";
// import ProductCardTwo from "./ui/ProductCardTwo";
import NewArrivals from "./ui/NewArrivals";
import ProductsHome from "./ui/ProductsHome";
import ProductsHomeTwo from "./ui/ProductsHomeTwo";

function App() {

  return (
    <main>
      <HeaderSlider />
      {/* <HomeBanner /> */}
      <FeaturedProducts />
      <NewArrivals />
      {/* <ProductCardTwo /> */}
      <ProductsHome />
      <ProductsHomeTwo />
      <Highlights />
      {/* <Highlights /> */}
      {/* this connect to the main database}
      <Categories />
      <BannerCategories /> */}
      <FeaturedProducts />
      {/*<BannerCategories />
      
      
       <Container>
        <p>Ecommerce Site</p>
      </Container> */}
    </main>
  )
}

export default App
