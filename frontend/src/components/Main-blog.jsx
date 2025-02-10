import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getdata, imageurl } from '../API/axiosfrontcreate'
import Loadersmall from './Loader'

export default function Mainblogs() {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)

    const fetchdata = async () => {
        setloading(true)
        const data = await getdata('latestarticle')
        if (data.status == true) {
            setarticles(data.articles)
            setloading(false)
        } else {
            toast.error("Failed to fetch data");
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div className="section-7 bg-light">
            <div className="main-projects">
                <div className="container-fluid py-5">
                    <div className="section-header py-5">
                        <div className="text-center">
                            <h5>Blog & news</h5>
                            <h1>Articles & Blog posts</h1>
                            <p>We specialize in a wide range of construction services, spanning residental, commercial, and industrial projects.</p>
                        </div>
                        <div className="container">
                            {loading ? (
                                <Loadersmall />
                            ) : (
                                <div className="row py-4">
                                    {articles && articles.map((item, i) => (
                                        <div className="col-md-4 mb-3" key={i}>
                                            <div className="p-2">
                                                <div className="card shadow border-0">
                                                    <div className="card-image">
                                                        <img src={`${imageurl}articles/${item.image}`} alt="" />
                                                    </div>
                                                    <div className="card-details p-3">
                                                        <div className="card-description">
                                                            <p>{item.title}</p>
                                                        </div>
                                                        <div className="card-button mb-2 ps-2">
                                                            <div className="text-left">
                                                                <NavLink to={`/our-blogs/${item.id}`}><button className='btn btn-primary'>Read more</button></NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="blog-all mt-3">
                            <div className="text-center">
                                <NavLink to={'/our-blogs'}><button className='btn btn-primary btn-large'>View all Blogs</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
