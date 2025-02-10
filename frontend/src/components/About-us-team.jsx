import React, { useEffect, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { getdata, imageurl } from '../API/axiosfrontcreate'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import Loadersmall from './Loader'

export default function Aboutusteam() {
    const [members, setmembers] = useState([]);
    const [loading, setloading] = useState(false);

    const fetchdata = async () => {
        setloading(true);
        const data = await getdata('member')
        if (data.status == true) {
            setmembers(data.members)
            setloading(false)
        } else {
            toast.error("Failed to fetch data");
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div className="section-9 bg-light">
            <div className="main-projects">
                <div className="container-fluid py-5">
                    <div className="section-header py-5">
                        <div className="text-center">
                            <h5>Team</h5>
                            <h1>Our Team</h1>
                            <p>We specialize in a wide range of construction services, spanning residental, commercial, and industrial projects.</p>
                        </div>
                        <div className="container">
                            {loading ? (
                                <Loadersmall />
                            ) : (
                                <div className="row py-4">
                                    {members && members.map((item, i) => (
                                        <div className="col-md-6 col-lg-4 mb-3" key={i}>
                                            <div className="p-2">
                                                <div className="card shadow border-0">
                                                    <div className="card-image">
                                                        <img src={`${imageurl}members/${item.image}`} alt="" />
                                                    </div>
                                                    <div className="card-details p-3 mb-2">
                                                        <div className="card-description ps-2">
                                                            <h4>{item.name}</h4>
                                                            <p>{item.job_title}</p>
                                                            <NavLink target='_blank' to={item.linkedin_url}><i><FaLinkedin /></i></NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
