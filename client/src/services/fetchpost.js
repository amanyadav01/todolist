import { axiosInstance } from './axiosServices';
const getPost = () => {
    return axiosInstance({
        url: '/posts',
        method: 'GET',
    })
}

export {
    getPost
}