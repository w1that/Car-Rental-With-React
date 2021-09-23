import axios from "axios"

export default class CustomerService{
    logCustomerIn(email, password){
       
        
    }
    getAll(){
       return axios.get('https://springrestapi-carrental.herokuapp.com/api/customers/getAll')
    }

    getCustomerByEmail(email){
       return axios.get('https://springrestapi-carrental.herokuapp.com/api/customers/getByEmail?email='+ email)
    }
}