import React, { useContext } from 'react'
import { Authcontext } from './Context'
import { Navigate } from 'react-router-dom';

export default function Authcheck({ children }) {
    const { user } = useContext(Authcontext);

    if(!user){
        return <Navigate to={'/admin'} />
    }

    return children
}
