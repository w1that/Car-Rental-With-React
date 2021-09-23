import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from "semantic-ui-react";
import CarItem from "../components/CarsField/CarItem";

function FilteredCarsPage() {
  const maxPrice = useSelector((state) => state.filter.maxPrice);
  const minPrice = useSelector((state) => state.filter.minPrice);
  const colors = useSelector((state) => state.filter.colors);
  const carImages = useSelector((state) => state.cars.images);
  const cars = useSelector((state) => state.cars.items);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    let carsMatching = [];
    setFilteredCars([]);
    cars.forEach((car) => {
      if (colors.length > 0) {
        //color da seçilmiş
        if (minPrice > 0 && maxPrice > 0) {
          //iki fiyat da girilmiş
          colors.forEach((color) => {
            if (
              car.color.name === color.name &&
              car.dailyPrice > minPrice &&
              car.dailyPrice < maxPrice
            ) {
              carsMatching.push(car);
            }
          });
          return;
        }
        if (minPrice > 0) {
          //min fiyat girilmiş
          colors.forEach((color) => {
            if (car.color.name === color.name && car.dailyPrice > minPrice) {
              carsMatching.push(car);
            }
          });
          return;
        }
        if (maxPrice > 0) {
          //max fiyat girilmiş
          colors.forEach((color) => {
            if (car.color.name === color.name && car.dailyPrice < maxPrice) {
              carsMatching.push(car);
            }
          });
          return;
        }
        if (minPrice === 0 && maxPrice === 0) {
          colors.forEach((color) => {
            if (car.color.name === color.name) {
              carsMatching.push(car);
            }
          });
          return;
        }
      } else {
        if (minPrice > 0 && maxPrice > 0) {
          //iki fiyat da girilmiş
          if (car.dailyPrice > minPrice && car.dailyPrice < maxPrice) {
            carsMatching.push(car);
          }

          return;
        }
        if (minPrice > 0) {
          //min fiyat girilmiş
          if (car.dailyPrice > minPrice) {
            carsMatching.push(car);
          }

          return;
        }
        if (maxPrice > 0) {
          //max fiyat girilmiş

          if (car.dailyPrice < maxPrice) {
            carsMatching.push(car);
          }

          return;
        }
      }
    });

    setFilteredCars(carsMatching);
  }, [cars, colors, maxPrice, minPrice]);

  return (
    <div>
      <Container>
      <Grid columns="3">
          {filteredCars.length>=1?filteredCars.map((car) => (
            !car.busy&&<CarItem key={car.id} car={car} carImages={carImages}></CarItem>
          )):<h1 style={{color:"white"}}>there is no car matching those filters</h1>}
        </Grid>
      </Container>
    </div>
  );
}
export default FilteredCarsPage;
