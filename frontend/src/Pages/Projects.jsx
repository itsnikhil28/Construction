import React, { useEffect, useState } from 'react'
import Commonherosection from '../components/Common-herosection'
import { getdata, imageurl } from '../API/axiosfrontcreate'
import { NavLink } from 'react-router-dom'
import Loadersmall from '../components/Loader'

export default function Projects() {
    const [projects, setprojects] = useState([])
    const [loading, setloading] = useState(false)

    const fetchdata = async () => {
        setloading(true)
        const data = await getdata('project')
        if (data.status == true) {
            setprojects(data.projects)
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
            <Commonherosection preheading={'Quality. Integrity. Value.'} heading={'Our Projects'} text={'We specialize in a wide range of construction services, <br /> spanning residental, commercial, and industrial projects.'} />
            <div className="section-5 bg-light">
                <div className="main-projects">
                    <div className='container py-5'>
                        <div className="section-header py-5">
                            <div className="text-center">
                                <h5>Our Projects</h5>
                                <h1>Discover Our diverse range of products</h1>
                                <p>We offer a diverse array of construction services, spanning residental, commercial, and industrial projects.</p>
                            </div>
                            <div className="row py-4">
                                {loading ? (
                                    <Loadersmall />
                                ) : (
                                    <>
                                        {projects && projects.map((item, i) => (
                                            <div className='col-md-4 col-lg-4' key={i}>
                                                <div className="item">
                                                    <div className="project-image">
                                                        <img src={`${imageurl}projects/${item.image}`} alt="" />
                                                    </div>
                                                    <div className="project-body">
                                                        <div className="project-title">
                                                            <h3>{item.title}</h3>
                                                        </div>
                                                        <div className="project-content">
                                                            <p>{item.short_desc}</p>
                                                        </div>
                                                        <NavLink to={`/our-projects/${item.id}`}><button className='btn btn-primary'>Read More</button></NavLink>
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
