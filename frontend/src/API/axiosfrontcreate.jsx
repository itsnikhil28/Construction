import axios from "axios";
import { toast } from "react-toastify";

export const imageurl = 'http://127.0.0.1:8000/storage/';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

// Fetch All Data 
export const getdata = async (data) => {
    try {
        const fetcheddata = await api.get(`${data}`);

        return fetcheddata.data;
    } catch (error) {
        // toast.error(error.response?.data?.error || 'Something Went Wrong')
        return error.response
    }
}

// Create Data
export const createdata = async (data , formdata) => {
    try {
        const fetcheddata = await api.post(`${data}`, formdata);

        return fetcheddata.data;
    } catch (error) {
        toast.error(error.response?.data?.error || 'Something Went Wrong')
        return error.response
    }
}