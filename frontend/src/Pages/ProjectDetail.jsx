import React, { useEffect, useState } from 'react'
import Maintestinomial from '../components/Main-testinomial';
import { getdata, imageurl } from '../API/axiosfrontcreate';
import { NavLink, useParams } from 'react-router-dom';
import Commonherosection from '../components/Common-herosection';
import { toast } from 'react-toastify';
import Loadersmall from '../components/Loader';

export default function ProjectDetail() {
    const id = useParams();

    // const [projects, setprojects] = useState([])
    const [project, setproject] = useState({})
    const [loading, setloading] = useState(false)

    const fetchdata = async () => {
        setloading(true)
        const data = await getdata(`project-detail/${id.id}`)
        if (data.status == true) {
            // setprojects(data.projects);
            setproject(data.project);
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
            <Commonherosection preheading={'Quality. Integrity. Value.'} heading={project.title} />
            <div className="section-11 bg-light">
                <div className="main-services pb-5">
                    <div className="container py-5">
                        <div className="row px-3">
                            <div className="col-md-3 shadow border-0 dashboard-radius-1">
                                <div className="dashboard-details p-3">
                                    <h3>Insights</h3>
                                    {loading ? (
                                        <Loadersmall />
                                    ) : (
                                        <ul>
                                            <li>
                                                <h5>Location : </h5>
                                                <p>{project.location}</p>
                                            </li>
                                            <li className='mt-2'>
                                                <h5>Construction Type : </h5>
                                                <p>{project.construction_type}</p>
                                            </li>
                                            <li className='mt-2 mb-0' style={{ borderBottom: 0 }}>
                                                <h5>Sector : </h5>
                                                <p>{project.sector}</p>
                                            </li>
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
                                                {project.image && (
                                                    <img src={`${imageurl}projects/${project.image}`} className='w-100 p-2' />
                                                )}
                                            </div>
                                            <div className="description-content mx-3">
                                                <p><strong>Details :</strong><span dangerouslySetInnerHTML={{ __html: project.content }}></span></p>
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
