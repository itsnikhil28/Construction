import React from 'react'

export default function Loadersmall() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
            <div className="loader"></div>
        </div>
    )
}

export function Formloader() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
            <div className="loader"></div>
        </div>
    )
}

export function Logoutloader() {
    return (
        <div className="p-3 d-flex justify-content-center align-items-center">
            <div className="loader"></div>
        </div>
    )
}
