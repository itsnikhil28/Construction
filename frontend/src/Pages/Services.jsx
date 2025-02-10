import React, { useEffect, useState } from 'react'
import Commonherosection from '../components/Common-herosection'
import { toast } from 'react-toastify'
import { getdata, imageurl } from '../API/axiosfrontcreate'
import { NavLink } from 'react-router-dom'
import Loadersmall from '../components/Loader'

export default function Services() {
    const [services, setservices] = useState([])
    const [loading, setloading] = useState(false)

    const fetchdata = async () => {
        setloading(true)
        const data = await getdata('service')
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
        <>
            <Commonherosection preheading={'Quality. Integrity. Value.'} heading={'Services'} text={'We specialize in a wide range of construction services, <br /> spanning residental, commercial, and industrial projects.'} />
            <div className="section-3 bg-light">
                <div className="main-services">
                    <div className={`container py-5`}>
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
                                            <div className='col-md-4 col-lg-4' key={i}>
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
                                                        <NavLink to={`${item.id}`}><button className='btn btn-primary'>Read More</button></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
