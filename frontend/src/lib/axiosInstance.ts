import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    //timeout: 20000,
    headers: {
        // "Authorization": import.meta.env["DB_AUTH_TOKEN"]
    }
})

//add a response interceptor
axiosInstance.interceptors.response.use((response) => response,
    (error) => {
    // console.log("axios error ", error.toJSON())
    return Promise.reject(error.response && error.response.data)
    // return Promise.reject({message: error.response && error.response.data })
    }
)
export default  axiosInstance;

