import "./App.css";
import Advantages from "./components/Advantages";
import Banner from "./components/Banner";
import BusinessBanner from "./components/BusinessBanner";
import Categories from "./components/Categories";
import CompanyList from "./components/CompanyList";
import EducationBanner from "./components/EducationBanner";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Home from "./components/Home";
import InstructorBanner from "./components/InstructorBanner";
import Navbar from "./components/Navbar";
import Row2View from "./components/Row2View";
import TopCategories from "./components/TopCategories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <Banner />
      <Home />
      <Advantages />
      <Row2View />
      <TopCategories />
      <Featured />
      <InstructorBanner />
      <CompanyList />
      <BusinessBanner />
      <EducationBanner />
      <Footer />
    </div>
  );
}

export default App;
