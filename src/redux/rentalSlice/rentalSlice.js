import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addRent = createAsyncThunk(
    'rents/addRent',
    async (rental)=>{
        console.log("rents/addRent")
        axios.post(`https://springrestapi-carrental.herokuapp.com/api/rentals/add?customerId=${rental.customerId}&carId=${rental.carId}`)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
        
    }
)

export const getAll = createAsyncThunk(
    'rents/getAll',
    async ()=>{
        console.log("rents/getAll")
        const response = await axios.get(`https://springrestapi-carrental.herokuapp.com/api/rentals/getAll`)

        return response.data.data
    }
)

export const deleteRental = createAsyncThunk(
    'rents/deleteRental',
    async (rental)=>{
        console.log("rents/deleteRental")
        const response = axios.delete(`https://springrestapi-carrental.herokuapp.com/api/rentals?id=${rental.id}`)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
        return response
    }
)

export const rentalSlice = createSlice({
    name:"rent",
    initialState:{
        items:[],
    },
    reducers:{

    },
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            state.items = action.payload
        },
        [addRent.fulfilled]:(state,action)=>{
            console.log(state.items)
        }

    }
})

export default rentalSlice.reducer