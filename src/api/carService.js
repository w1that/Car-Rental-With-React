import axios from "axios";

export default class CarService {
    getAllCars(){
        console.log("getallcars çağrıldı")
        return axios.get("https://springrestapi-carrental.herokuapp.com/api/cars/getAll")
    }
    getCarById(id){
        console.log("getCarById çağrıldı")
        return axios.get("https://springrestapi-carrental.herokuapp.com/api/cars/getCarById?id="+id)
    }
    getCarsDetails(){
        console.log("getCarsDetails çağrıldı")
        return axios.get("https://springrestapi-carrental.herokuapp.com/api/cars/getCarDetails")
    }
    getCarsByBrandId(id){
        console.log("getCarsByBrandId çağrıldı")
        return axios.get("https://springrestapi-carrental.herokuapp.com/api/cars/getCarsByBrandId?id="+id)
    }
    getCarsByColorId(id){
        console.log("getCarsByColorId çağrıldı")
        return axios.get("https://springrestapi-carrental.herokuapp.com/api/cars/getCarsByColorId?id="+id)
    }
    deleteByCarId(id){
        return axios.delete("https://springrestapi-carrental.herokuapp.com/api/cars/delete?id="+ id)
    }
    addCar(newCar){
        return 
    }
    addCarImage(){

    }
}