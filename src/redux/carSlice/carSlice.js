import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import CarService from "../../api/carService";

const carService = new CarService();
export const getAllCars = createAsyncThunk("cars/getAllCars", async () => {
  const response = await carService.getAllCars();
  return response.data.data;
});

export const getCarById = createAsyncThunk("cars/getCarById", async (id) => {
  const response = await carService.getCarById(id);
  return response.data.data;
});

export const getCarsImages = createAsyncThunk(
  "carsImages/getCarsImages",
  async () => {
    // const response = await axios.get("http://localhost:8080/api/images/getAll");
    const response = await axios.get("https://springrestapi-carrental.herokuapp.com/api/images/getAll");

    return response.data.data;
  }
);

export const getImagesByCarId = createAsyncThunk(
  "carsImages/getImagesByCarId",
  async (id) => {
    const response = await axios.get(
      "https://springrestapi-carrental.herokuapp.com/api/images/getByCarId?id=" + id
    );
    console.log("getimages");
    return response.data.data;
  }
);
export const addCar = createAsyncThunk("cars/addCar", async (newCar) => {
  const response = await axios
    .post(
      // `http://localhost:8080/api/cars/add?brand.id=${newCar.brand.id}&color.id=${newCar.color.id}&dailyPrice=${newCar.dailyPrice}&description=${newCar.description}&modelYear=${newCar.modelYear}`
    `https://springrestapi-carrental.herokuapp.com/api/cars/add?brand.id=${newCar.brand.id}&color.id=${newCar.color.id}&dailyPrice=${newCar.dailyPrice}&description=${newCar.description}&modelYear=${newCar.modelYear}`
      )
    .then((response) => console.log(response.data));

  return response;
});

export const deleteCar = createAsyncThunk("cars/deleteCar", async (car) => {
  const response = await axios
    .delete("https://springrestapi-carrental.herokuapp.com/api/cars/delete?id=" + car.id)
    .then((response) => console.log("delete",response))
    .catch((err) => console.log("delete",err));
  return response;
});

export const setNotBusy =createAsyncThunk("cars/setNotBusy", async (car) => {
  const response = await axios
    .put("https://springrestapi-carrental.herokuapp.com/api/cars/setNotBusy?id=" + car.id)
    .then((response) => console.log("setnotbusy",response))
    .catch((err) => console.log("setnotbusy",err));
  return response;
}); 




export const carSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    images: [],
    carById: {},
    searchedCars: [],
    imageIsLoading: true,
    itemsIsLoading: true,
    currentCar: {},
    imagesByCarId: [],
  },
  reducers: {
    pushSearchedCar: (state, action) => {
      state.searchedCars.push(action);
    },
    setCurrentCar: (state, action) => {
      state.currentCar = action.payload;
    },
    clearImagesByCarId: (state) => {
      state.imagesByCarId = [];
    },
  },
  extraReducers: {
    [getAllCars.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.itemsIsLoading = false;
    },
    [getAllCars.pending]: (state) => {
      state.itemsIsLoading = true;
    },

    [getCarsImages.fulfilled]: (state, action) => {
      state.images = action.payload;
      state.imageIsLoading = false;
    },
    [getCarsImages.pending]: (state) => {
      state.imageIsLoading = true;
    },
    [getCarById.fulfilled]: (state, action) => {
      state.carById = action.payload;
    },
    [getImagesByCarId.fulfilled]: (state, action) => {
      state.imagesByCarId = action.payload;
    },
    [addCar.fulfilled]: (state, action) => {
      state.items.push()
      return action.payload;
    },
    [setNotBusy.fulfilled]:()=>{
      console.log("setted not busy")
    }
  },
});

export const {
  pushSearchedCar,
  setCurrentCar,
  clearImagesByCarId,
  setCarsLength,
  decreaseCarsLength,
} = carSlice.actions;
export default carSlice.reducer;
