import { createContext, useState } from "react";

export const Authcontext = createContext(null);

export const Authprovider = ({ children }) => {
    const user_details = JSON.parse(localStorage.getItem('user_details'))
    const [user, setuser] = useState(user_details);

    const loginuser = (user) => {
        setuser(user)
    }

    const logoutuser = () => {
        localStorage.removeItem('user_details');
        localStorage.removeItem('token');
        setuser(null)
    }

    return <Authcontext.Provider value={{ loginuser, user, logoutuser }} >{children}</Authcontext.Provider>
}