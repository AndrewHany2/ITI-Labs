import axios from "axios"
const baseURL="https://localhost:8000/api/users"
export const getUsersByName = async (name)=>{
    let response=null;
    try {
        response = await axios.get(`${baseURL}/:${name}`)
    } catch (error) {
        console.log(error)
    }
    return{
        type:"CARS_LIST",
        payload:response.data
    }
}

