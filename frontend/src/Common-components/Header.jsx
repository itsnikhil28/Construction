import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><span>URBANEDGE </span>CONSTRUCTION</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={'/'}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={'/about-us'}>About Us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={'/our-services'}>Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={'/our-projects'}>Our Projects</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={'/our-blogs'}>Blogs</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={'/contact-us'}>Contact Us</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
