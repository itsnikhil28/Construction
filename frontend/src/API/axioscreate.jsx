import axios from "axios";
import { toast } from "react-toastify";
import { gettoken } from "./Localitem";

const api = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

// Login 
export const login = async (data) => {
    try {
        const logindata = await api.post('login', data);
        return logindata;
    } catch (error) {
        toast.error(error.response.data.error || 'Something Went Wrong')
        return error.response
    }
}

// Logout 
export const logout = async (data) => {
    const token = gettoken();
    try {
        const logoutdata = await api.post('logout', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return logoutdata;
    } catch (error) {
        toast.error(error.response.data.error || 'Something Went Wrong')
        return error.response
    }
}

// Fetch All Data 
export const getdata = async (data) => {
    const token = gettoken();
    try {
        const fetcheddata = await api.get(`${data}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return fetcheddata.data;
    } catch (error) {
        // toast.error(error.response?.data?.error || 'Something Went Wrong')
        return error.response
    }
}

// Create Data
export const createdata = async (data , formdata) => {
    const token = gettoken();
    try {
        const fetcheddata = await api.post(`${data}`, formdata , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return fetcheddata.data;
    } catch (error) {
        toast.error(error.response?.data?.error || 'Something Went Wrong')
        return error.response
    }
}

// Single Data
export const getsingledata = async (data,id) => {
    const token = gettoken();
    try {
        const fetcheddata = await api.get(`${data}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return fetcheddata.data;
    } catch (error) {
        // toast.error(error.response?.data?.error || 'Something Went Wrong')
        return error.response
    }
}

//Update Data
export const updatedata = async (data, id , formdata) => {
    const token = gettoken();
    try {
        const fetcheddata = await api.post(`${data}/${id}`, formdata, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return fetcheddata.data;
    } catch (error) {
        // toast.error(error.response?.data?.error || 'Something Went Wrong')
        return error.response
    }
}

// Delete Data
export const deletedata = async (data, id) => {
    const token = gettoken();
    try {
        const fetcheddata = await api.delete(`${data}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return fetcheddata.data;
    } catch (error) {
        // toast.error(error.response?.data?.error || 'Something Went Wrong')
        return error.response
    }
}