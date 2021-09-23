import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import { getAllCars, getCarsImages} from "../../redux/carSlice/carSlice";
import CarItem from "./CarItem";

function CarsList() {
  const dispatch = useDispatch()
  const searchedText = useSelector((state) => state.search.inputText);
  const cars = useSelector(state => state.cars.items)
  const carImages = useSelector((state) => state.cars.images);

  let searchedCars = [];

  
  if (searchedText) {
    cars.forEach((car) => {
      if (car.brand.name.toLowerCase().includes(searchedText)) {
        searchedCars.push(car);
      }
    });
  }

  useEffect(() => {
    dispatch(getAllCars())
    dispatch(getCarsImages());
  }, [dispatch])

  return (
    <div>
    <Grid columns="3">
         {searchedText &&
           searchedCars.map((car) => (
            !car.busy&&<CarItem key={car.id} car={car} carImages={carImages}></CarItem>
           ))}
         {!searchedText &&
           cars.map((car) => (
            !car.busy&&<CarItem key={car.id} car={car} carImages={carImages}></CarItem>
          ))}
       </Grid>
       
    </div>
  );
   
}

export default CarsList;
