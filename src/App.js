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
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./components/Login";
import { UserContext } from "./components/Contexts/UserContext";
import { useState } from "react";
import Page404 from "./components/Page404";
import SignUp from "./components/SignUp";

function App() {
  const [User, setUser] = useState(false);
  const history = useHistory();
  return (
    <div className="App">
      <UserContext.Provider value={{ User, setUser }}>
        <Switch>
          <Route path="/" exact>
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
          </Route>
          {!User ? (
            <Route path="/login">
              <Login />
            </Route>
          ) : (
            <Route path="/login">{history.push("/")}</Route>
          )}
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route to="*">
            <Page404 />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
