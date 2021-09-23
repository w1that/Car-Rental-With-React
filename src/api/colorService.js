import axios from "axios";


export default class ColorService{
    getAllColors(){
        console.log("getAllColors çağrıldı")
        return axios.get("https://springrestapi-carrental.herokuapp.com/api/colors/getAll")
    }
}