import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";

function SearchedCarsPage() {
  const carImages = useSelector(state => state.cars.carImages)
  const cars = useSelector(state => state.cars.items)
  

  return (
    <div>
      <Grid columns="3">
        {cars.map((car) => (
          <CarItem key={car.id} car={car} carImages={carImages}></CarItem>
        ))}
      </Grid>
    </div>
  );
}

export default SearchedCarsPage;
