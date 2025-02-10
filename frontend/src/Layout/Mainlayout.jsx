import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common-components/Header'
import Footer from '../Common-components/Footer'

export default function Mainlayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
