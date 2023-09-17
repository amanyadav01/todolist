import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 6000,

});

axiosInstance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    console.log("Errror in Axios Request Interceptor:", error);
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => response, (error) => {
    console.log("Errror in Axios Response Interceptor:", error);
    return Promise.reject(error);
})



export { axiosInstance }