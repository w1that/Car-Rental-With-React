import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setCurrentCar } from "../../redux/carSlice/carSlice";

function CarItem({ car, carImages }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [shownCarImage, setShownCarImage] = useState({});

  useEffect(() => {
    carImages.forEach(carImage => {
      if(carImage.car.id==car.id){
        setShownCarImage(carImage)
      }
    });
  }, [carImages])

  function selectCarHandler() {
    dispatch(setCurrentCar(car));
    history.push(`/details/${car.id}`);
  }

  return (
    <div style={{ position: "relative" }}>
      <img
        className="carImage"
        style={{
          width: "282px",
          height: "200px",
          borderRadius: 8,
          margin: "0px",
          marginTop: 15,
          marginBottom: 5,
          boxShadow: "0px 0px 20px -3px rgba(255,255,255,0.84)",
        }}
        src={shownCarImage.imagePath?shownCarImage.imagePath:"https://previews.123rf.com/images/hayesnch/hayesnch1708/hayesnch170800025/84814823-empty-open-trunk-of-a-car.jpg"}
        onClick={selectCarHandler}
      ></img>
      <div
        style={{
          background: "white",
          position: "absolute",
          right: "1em",
          bottom: "1em",
          borderRadius: 10,
          boxShadow: "0px 0px 18px 1px rgba(0,0,0,0.98)",
        }}
      >
        <h3 style={{ padding: "5px", fontSize: 15 }}>${car.dailyPrice}/day</h3>
      </div>

      <div
        style={{
          position: "absolute",
          left: "1em",
          bottom: "1em",
        }}
      ></div>
    </div>
  );
}

export default CarItem;
