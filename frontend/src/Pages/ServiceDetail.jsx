import React, { useEffect, useState } from 'react'
import Commonherosection from '../components/Common-herosection'
import { NavLink, useParams } from 'react-router-dom'
import { getdata, imageurl } from '../API/axiosfrontcreate';
import { toast } from 'react-toastify';
import Maintestinomial from '../components/Main-testinomial';
import Loadersmall from '../components/Loader';

export default function ServiceDetail() {
    const id = useParams();

    const [services, setservices] = useState([])
    const [service, setservice] = useState('')
    const [loading, setloading] = useState(false)

    const fetchdata = async () => {
        setloading(true)
        const data = await getdata(`service-detail/${id.id}`)
        if (data.status == true) {
            setservices(data.services);
            setservice(data.service);
            setloading(false)
        } else {
            toast.error("Failed to fetch data");
        }
    }

    useEffect(() => {
        fetchdata();
    }, [id.id])
    return (
        <>
            <Commonherosection preheading={'Quality. Integrity. Value.'} heading={service.title} />
            <div className="section-11 bg-light">
                <div className="main-services pb-5">
                    <div className="container py-5">
                        <div className="row px-3">
                            <div className="col-md-3 shadow border-0 dashboard-radius-1">
                                <div className="dashboard-details p-3">
                                    <h4>Services</h4>
                                    {loading ? (
                                        <Loadersmall />
                                    ) : (
                                        <ul>
                                            {services && services.map((item, i) => (
                                                <li className='border-radius-remove' key={i}>
                                                    <NavLink to={`/our-services/${item.id}`}>{item.title}</NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-8 shadow border-0 dashboard-radius ms-md-4">
                                <div className="dashboard-description p-3">
                                    {loading ? (
                                        <Loadersmall />
                                    ) : (
                                        <>
                                            <div className="description-image">
                                                {service.image && (
                                                    <img src={`${imageurl}services/${service.image}`} className='w-100 p-2' />
                                                )}
                                            </div>
                                            <div className="description-content mx-3">
                                                <p><strong>Details : </strong><span dangerouslySetInnerHTML={{ __html: service.content }}></span></p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Maintestinomial />
        </>
    )
}
