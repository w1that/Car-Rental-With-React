import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from "react-router";
import { Link } from "react-router-dom";
import {
  clearImagesByCarId,
  deleteCar,
  getImagesByCarId,
} from "../redux/carSlice/carSlice";
import "react-alice-carousel/lib/alice-carousel.css";
import {  Icon } from "semantic-ui-react";
import axios from "axios";
import { toast } from "react-toastify";

function CarDetailsPage() {
  const currentCar = useSelector((state) => state.cars.currentCar);
  const imagesByCarId = useSelector((state) => state.cars.imagesByCarId);
  const [file, setFile] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const currentCustomer = useSelector(
    (state) => state.customer.currentCustomer
  );

  useEffect(() => {
    dispatch(getImagesByCarId(currentCar.id));
  }, [dispatch, currentCar]);

  useEffect(() => () => dispatch(clearImagesByCarId()), []);

  function handleImagePreview(e) {
    setFile(e.target.files[0]);
  }

  async function addImageHandler() {
    if (file) {
      await fileUpload(file)
        .then((response) => {
          toast.success("image added successfully");
          console.log(response);
        })
        .catch((er) => console.log(er));
    } else {
      alert("choose image");
    }
  }

  function deleteCarHandler() {
    dispatch(deleteCar(currentCar));
    setTimeout(() => {
      history.push("/");
    }, 300);
  }

  async function fileUpload(file) {
    const url = `https://springrestapi-carrental.herokuapp.com/api/images/add?id=${currentCar.id}`;
    const formData = new FormData();
    formData.append("imageFile", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const response = await axios.post(url, formData, config);
    return response;
  }

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      {currentCustomer && currentCustomer.email === "admin" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 40,
          }}
        >
          <label for="file-upload" class="custom-file-upload customizedButton">
            <Icon name="upload"></Icon> Upload Image
          </label>
          <input onChange={handleImagePreview} id="file-upload" type="file" />

          <button
            onClick={addImageHandler}
            style={{ padding: 10, border: "0px", borderRadius: 7 }}
            className=" customizedButton"
          >
            <Icon name="add"></Icon> Add Image
          </button>

          <button
            onClick={deleteCarHandler}
            style={{ padding: 10, border: "0px", borderRadius: 7 }}
            className=" customizedButton"
          >
            Delete Car
          </button>
        </div>
      )}

      <div
        style={{
          width: 600,
          marginTop: 20,
        }}
      >
        {imagesByCarId.length == 1 ? (
          <img height="350" src={imagesByCarId[0].imagePath}></img>
        ) : (
          <div>
            <AliceCarousel autoPlay autoPlayInterval="3000">
              {imagesByCarId.map((image) => (
                <img
                  key={image.id}
                  src={image.imagePath}
                  className="sliderimg"
                />
              ))}
            </AliceCarousel>
          </div>
        )}

        {imagesByCarId.length<1&&''}
      </div>
      <div
        style={{
          width: 600,
          background: "#4E4E50",
          borderRadius: 10,
          padding: 20,
          textAlign: "left",
        }}
      >
        <div style={{ padding: 20, color: "white" }}>
          <div
            style={{
              background: "#696969",
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            <h1 style={{ padding: 10 }}>Modelyear: {currentCar.modelYear}</h1>
          </div>
          <div
            style={{
              background: "#696969",
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            <h1 style={{ padding: 10 }}>Brand: {currentCar.brand.name}</h1>
          </div>
          <div
            style={{
              background: "#696969",
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            <h1 style={{ padding: 10 }}>
              Description: {currentCar.description}
            </h1>
          </div>
          <div
            style={{
              background: "#696969",
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            <h1 style={{ padding: 10 }}>Color: {currentCar.color.name}</h1>
          </div>
          <div
            style={{
              background: "#696969",
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            <h1 style={{ padding: 10 }}>
              Daily Price: {currentCar.dailyPrice}
            </h1>
          </div>
          {currentCustomer ? (
            currentCustomer.activated ? (
              <Link to={"/rent/" + currentCar.id}>
                <button className="rentCarButton customizedButton">
                  Rent this car
                </button>
              </Link>
            ) : (
              <div>
                <button disabled className="rentCarButton customizedButton">
                  Rent this car
                </button>
                <p
                  style={{
                    color: "black",
                    opacity: "80%",
                    letterSpacing: "1px",
                    fontSize: 16,
                    marginTop: 20,
                    background: "yellow",
                    padding: 5,
                    letterSpacing: 1,
                  }}
                >
                  Activate your account to have a renting opportunity
                </p>
              </div>
            )
          ) : (
            <div>
              <button disabled className="rentCarButton customizedButton">
                Rent this car
              </button>
              <p
                style={{
                  color: "black",
                  opacity: "80%",
                  letterSpacing: "1px",
                  fontSize: 16,
                  marginTop: 20,
                  background: "yellow",
                  padding: 5,
                  letterSpacing: 1,
                }}
              >
                Please log in for renting a car!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarDetailsPage;
