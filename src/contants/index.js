import axios from "axios"

export const BASE_URL = 'https://api-cookenu.onrender.com'

export const Login = async (body) => {

    const { data } = await axios.post(`${BASE_URL}/user/login`, body)
    console.log(data);
    return data
}

export const Signup = async (body) => {
    console.log(body);
    const  { data }  = await axios.post(`${BASE_URL}/user/signup`, body)
    console.log(data);
    return data
}



export const ListRecipies = async () => {
    const { data } = await axios.get(`${BASE_URL}/recipe/all`,
        {
            headers: {
                Authorization: localStorage.getItem('cookenu.token') 
            }
        }
    )
    return data
}

export const GetRecipes = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/recipe/${id}`,
        {
            headers: {
                Authorization: localStorage.getItem('cookenu.token') 
            }
        }
    )
    return data
}

export const AddRecipies = async (body) => {
    axios.post()
    const { data } = await axios.post(`${BASE_URL}/recipe`,
       body,
    {
            headers: {
                Authorization: localStorage.getItem('cookenu.token') 
            }
        }
    )
    return data
}

export const validateEmail = email=>/[a-zA-Z0-9]+@[a-z]{3}\.[.a-z]?/.test(email)
export const validatePassword = password=>/.(6,)/.test(password)
export const validateName = (name, length = 2)=>new RegExp(`/.${length}/`).test(name)