import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.request.use(async (request) => {
    let token = localStorage.getItem('token');
    if (token && request.url != "/api/items") {
        request.headers['token'] = token;
    }
    return request;
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    toast.error(error.response.statusText)
    throw error
});



export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
    head: axios.head,
};
