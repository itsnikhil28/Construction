import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainHerosection() {
    return (
        <div className="section-1">
            <div className='hero-section d-flex justify-content-center align-items-center'>
                <div className="container-fluid">
                    <div className="text-center">
                        <h6>Welcome Amazing Constructions</h6>
                        <h1>Crafting dreams with</h1>
                        <h1>precision and excellence.</h1>
                        <p>We excel at transforming visions into reality through outstanding craftmanship and precise </p>
                        <p>attention to detail. With years of experience and a dedication to quality.</p>
                        <div className=" mt-4">
                            <NavLink to={'/contact-us'} ><button className='btn btn-contact btn-large'>Contact Now</button></NavLink>
                            <NavLink to={'/our-projects'} ><button className='btn btn-view ms-3 btn-large'>VIew projects</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
