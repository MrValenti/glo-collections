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

function App() {

  return (
    <main>
      <HeaderSlider />
      {/* <HomeBanner /> */}
      <ProductListHome />
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
