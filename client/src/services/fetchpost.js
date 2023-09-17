import { axiosInstance } from './axiosServices';
const getAllTasks = () => {
    return axiosInstance({
        url: '/todos',
        method: 'GET',
    })
}

export {
    getAllTasks
}