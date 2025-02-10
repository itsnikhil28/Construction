import React, { memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getdata, imageurl } from '../API/axiosfrontcreate'
import Loadersmall from './Loader'

export default memo(function Mainservices() {
    const [services, setservices] = useState([])
    const [loading, setloading] = useState(false)

    const fetchdata = async () => {
        setloading(true)
        const data = await getdata('latestservice')
        if (data.status == true) {
            setservices(data.services)
            setloading(false)
        } else {
            toast.error("Failed to fetch data");
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])

    return (
        <div className="section-3 bg-light">
            <div className="main-services">
                <div className='container-fluid py-5'>
                    <div className="section-header py-5">
                        <div className="text-center">
                            <h5>Our services</h5>
                            <h1>Our construction services</h1>
                            <p>We offer a diverse array of construction services, spanning residental, commercial, and industrial projects.</p>
                        </div>
                        <div className="row py-4">
                            {loading ? (
                                <Loadersmall />
                            ) : (
                                <>
                                    {services && services.map((item, i) => (
                                        <div className='col-md-4 col-lg-3' key={i}>
                                            <div className="item">
                                                <div className="service-image">
                                                    <img src={`${imageurl}services/${item.image}`} alt="" />
                                                </div>
                                                <div className="service-body">
                                                    <div className="service-title">
                                                        <h3>{item.title}</h3>
                                                    </div>
                                                    <div className="service-content">
                                                        <p>{item.short_desc}</p>
                                                    </div>
                                                    <NavLink to={`our-services/${item.id}`}><button className='btn btn-primary'>Read More</button></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                        <div className="service-all">
                            <div className="text-center">
                                <NavLink to={'/our-services'}><button className='btn btn-primary btn-large'>View all services</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
