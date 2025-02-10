import React from 'react'
import Adminsidebar from '../Admin/Admin-components/Adminsidebar'
import { Outlet } from 'react-router-dom'

export default function Adminlayout() {
    return (
        <>
            <div className="section-11">
                <div className="main-services pb-5">
                    <div className="container py-5">
                        <div className="row px-5">
                            <Adminsidebar />
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
