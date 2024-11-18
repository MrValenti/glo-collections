import BannerCategories from "./ui/BannerCategories"
// import Container from "./ui/Container"
// import Footer from "./ui/Footer"
// import Header from "./ui/Header"
import 'react-multi-carousel/lib/styles.css';
import HomeBanner from "./ui/HomeBanner";
import Highlights from "./ui/Highlights";
import Categories from "./ui/Categories";

function App() {

  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <Highlights />
      <Categories />
      {/* <Container>
        <p>Ecommerce Demo</p>
      </Container> */}
    </main>
  )
}

export default App
