export const getuserdetails = () => {
    return JSON.parse(localStorage.getItem('user_details'));
}

export const gettoken = () => {
    return JSON.parse(localStorage.getItem('token'));
}