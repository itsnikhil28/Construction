import React, { memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getdata } from '../API/axiosfrontcreate'
import { toast } from 'react-toastify'

export default memo(function Footer() {
    const [services, setservices] = useState([])

    const fetchdata = async () => {
        const data = await getdata('service')
        if (data.status == true) {
            setservices(data.services)
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div className="footer pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-description">
                            <div className="footer-title">
                                <h4>UrbanEdge Construction</h4>
                                <p>Our post-construction services gives you peace of mind knowing that we are still here for you even after</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="footer-description">
                            <div className="footer-title">
                                <h4>Our Services</h4>
                                <ul>
                                    {services && services.map((item, i) => (
                                        <li key={i}><NavLink to={`/our-services/${item.id}`}>{item.title}</NavLink></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-description">
                            <div className="footer-title">
                                <h4>Ouick Links</h4>
                                <ul>
                                    <li><NavLink to={'/about-us'}>About Us</NavLink></li>
                                    <li><NavLink to={'/our-services'}>Services </NavLink></li>
                                    <li><NavLink to={'/our-projects'}>Projects</NavLink></li>
                                    <li><NavLink to={'/our-blogs'}>Blog</NavLink></li>
                                    <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-description">
                            <div className="footer-title">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li><a href="#">(888-000-0000)</a></li>
                                    <li><a href="#">info@example.com</a></li>
                                    <li>
                                        <p>B-18X, Rajaji Puram</p>
                                        <p>Civil Lines</p>
                                        <p>Moradabad</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="text-center">
                        <div className="copyright-text">
                            <p>Copyright @ 2024 UrbanEdge Constructions. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
