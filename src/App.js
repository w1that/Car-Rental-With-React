import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { Container } from "semantic-ui-react";
import "./App.css";
import CarsList from "./components/CarsField/CarsList";
import FilterBar from "./components/Filter/FilterBar";
import FilterIcon from "./components/Filter/FilterIcon";
import Footer from "./components/NavigationBar/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ActivatePage from "./pages/ActivatePage";
import AddCarPage from "./pages/AddCarPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import FilteredCarsPage from "./pages/FilteredCarsPage";
import ProfilePage from "./pages/ProfilePage";
import RentalHistoryPage from "./pages/RentalHistoryPage";
import RentPage from "./pages/RentPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const isDropped = useSelector((state) => state.filter.isDropped);

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      
      <Container style={{ display: "flex", marginTop: "2em" }}>
        <Route exact path="/">
          {isDropped ? <FilterBar></FilterBar> : <FilterIcon></FilterIcon>}
        </Route>

        <Route exact path="/">
          <CarsList></CarsList>
        </Route>
        <Route path='/filter/'>
          <FilteredCarsPage></FilteredCarsPage>
        </Route>
        <Route exact path="/signin">
          <SignInPage></SignInPage>
        </Route>
        <Route exact path="/signup">
          <SignUpPage></SignUpPage>
        </Route>
        <Route exact path="/activate">
          <ActivatePage></ActivatePage>
        </Route>
        <Route exact path="/details/:id">
          <CarDetailsPage/>
        </Route>
        <Route exact path="/profile/:email">
          <ProfilePage></ProfilePage>
        </Route>
        <Route exact path="/add-car">
          <AddCarPage></AddCarPage>
        </Route>
        <Route exact path="/rent/:id">
          <RentPage></RentPage>
        </Route>
        <Route exact path="/rental-history/:email">
    <RentalHistoryPage></RentalHistoryPage>
        </Route>
        
      </Container>
    </div>
  );
}

export default App;
