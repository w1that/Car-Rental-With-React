import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Dropdown, Icon } from "semantic-ui-react";
import axios from "axios";
import { addCar, deleteCar, getAllCars } from "../redux/carSlice/carSlice";
import { getBrands } from "../redux/filterSlice/filterSlice";
import { getAllColors } from "../redux/colorSlice/colorSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

function AddCarPage() {
    const dispatch = useDispatch()
    const history =useHistory()
  const [color, setColor] = useState(null);
  const [brand, setBrand] = useState(null);
  const [modelYear, setModelYear] = useState(0)
  const [description, setDescription] = useState('')
  const [dailyPrice, setDailyPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [next, setNext] = useState(false)
  const [lastAddedCar, setLastAddedCar] = useState(null)
  
  const [id, setId] = useState(0)
  
 const colors = useSelector((state) => state.color.items);
 const brands = useSelector((state) => state.filter.brands);
 const cars = useSelector(state => state.cars.items)

 useEffect(() => {
     dispatch(getBrands())
     dispatch(getAllColors())
     
 }, [dispatch])


 useEffect(() => {
        setLastAddedCar({...lastAddedCar, brand:brand, color:color, dailyPrice:dailyPrice, description:description, modelYear:modelYear})
 }, [brand, color, dailyPrice, description, modelYear])

//  useEffect(() => {
//       if(cars.length===1){
//         setId(cars[cars.length].id)
//       }
//       if(cars.length>1){
//         setId(cars[cars.length].id)
//       }
//  }, [id])


 function nextHandler(){
    if(!color||!modelYear||!dailyPrice||!brand||!description){
      alert("Fill the fields")
    }
    else{
      dispatch(addCar(lastAddedCar)).then(response=>{
        dispatch(getAllCars())
      }).catch(err=>console.log(err))
      
        
      setNext(true)
      
    }
 }
 function addCarHandler(){
    if (!file){
      return alert("Choose image")
    }
    else{
      setTimeout(() => {
        fileUpload(file)
      }, 1000);
    }
 }

  function handleImagePreview(e){
      setFile(e.target.files[0])
  }

     function fileUpload(file){
    const url = `https://springrestapi-carrental.herokuapp.com/api/images/add?id=${cars[cars.length-1].id}`
    const formData = new FormData()
    formData.append('imageFile',file)
    const config = {
        headers:{
            'content-type':'multipart/form-data'
        }
    }
    
      axios.post(url, formData, config).then(response=>{
        console.log(response)
        toast.success("Car added successfully")
        history.push('/')
      }).catch(err=>{
        dispatch(deleteCar(cars[cars.length-1].id))
        setTimeout(() => {
          toast.success("An error occured. Try again later")
        history.push('/')
        console.log(err)
        }, 1000);
      })
    }


  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
   
      <div className="addCarPage">
        <h3 style={{fontSize:22, color:"white"}}>Add New Car</h3>
        <div style={{ padding: 50 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
           {!next&&<h4 
              style={{
                textAlign: "left",
                fontSize: 20,
                color: "white",
                marginBottom: 0,
              }}
            >
              <Dropdown text={color ? color.name : "Color"} Color>
                <Dropdown.Menu style={{height:150, overflow:"auto"}}>
                  {colors.map((color) => {
                    return (
                      <Dropdown.Item key={nanoid()} onClick={() => setColor(color)}>
                        {color.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </h4>}
            {!next&&<h4
              style={{
                textAlign: "left",
                fontSize: 20,
                color: "white",
                marginTop: 0,
              }}
            >
              <Dropdown text={brand ? brand.name : "Brand"} Color>
                <Dropdown.Menu  style={{height:150, overflow:"auto"}}>
                  {brands.map((brand) => {
                    return (
                      <Dropdown.Item key={nanoid()} onClick={() => setBrand(brand)}>
                        {brand.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </h4>}
          </div>

          {!next &&<input
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "3em",
              padding: 20,
              letterSpacing: 2,
              fontWeight: "bold",
              marginTop: "2em",
            }}
            placeholder="Model Year"
            onChange={(e)=>setModelYear(e.target.value)}
          ></input>}

          {!next&&<input
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "3em",
              padding: 20,
              letterSpacing: 2,
              fontWeight: "bold",
              marginTop: "2em",
            }}
            placeholder="Description"
            onChange={(e)=>setDescription(e.target.value)}
          ></input>}

          {!next&&<input
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "3em",
              padding: 20,
              letterSpacing: 2,
              fontWeight: "bold",
              marginTop: "2em",
            }}
            placeholder="Daily Price"
            onChange={(e)=>setDailyPrice(e.target.value)}
          ></input>
}

        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:40}}>
        {next && <div><label  for="file-upload" class="custom-file-upload customizedButton">
        <Icon name="upload"></Icon> Upload Image
        </label>
        <input onChange={handleImagePreview} id="file-upload" type="file"/></div>}

          {!next?<button onClick={nextHandler} className="nextButton customizedButton">
          Next <Icon name="right arrow"></Icon> 
          </button>:<button onClick={addCarHandler} className="nextButton customizedButton"> 
          <Icon name="add"></Icon> Add Car
          </button>}
        </div>
        </div>
      </div>
    </div>
  );
}

export default AddCarPage;
