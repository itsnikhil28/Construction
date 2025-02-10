import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { getdata, imageurl } from '../API/axiosfrontcreate';
import { toast } from 'react-toastify';
import Commonherosection from '../components/Common-herosection';
import Maintestinomial from '../components/Main-testinomial';
import Loadersmall from '../components/Loader';

export default function Blogdetail() {
    const id = useParams();

    const [articles, setarticles] = useState([])
    const [article, setarticle] = useState('')
    const [loading, setloading] = useState(false)

    const fetchdata = async () => {
        setloading(true)
        const data = await getdata(`article-detail/${id.id}`)
        if (data.status == true) {
            setarticles(data.articles);
            setarticle(data.article);
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
            <Commonherosection preheading={'Quality. Integrity. Value.'} heading={'Blogs & Articles'} />
            <div className="section-12 bg-light">
                <div className="main-services pb-5">
                    <div className="container py-5">
                        <div className="row px-3">
                            <div className="col-md-8 shadow border-0 dashboard-radius">
                                <div className="dashboard-description p-3">
                                    <div className="heading p-2">
                                        <h2>{article.title}</h2>
                                    </div>
                                    {loading ? (
                                        <Loadersmall />
                                    ) : (
                                        <>
                                            <div className="description-image">
                                                {article.image && (
                                                    <img src={`${imageurl}articles/${article.image}`} className='w-100 p-2' />
                                                )}
                                            </div>
                                            <div className="description-content mx-3">
                                                <p><strong>Details : </strong><span dangerouslySetInnerHTML={{ __html: article.content }}></span></p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-3 shadow border-0 dashboard-radius-1 ms-md-4 ">
                                <div className="dashboard-details p-3">
                                    <h3>Latest Blogs</h3>
                                    {loading ? (
                                        <Loadersmall />
                                    ) : (
                                        <ul>
                                            {articles.map((item, i) => (
                                                <li key={i}>
                                                    <div className="row p-2 d-flex align-items-center">
                                                        <div className="col-md-4">
                                                            <NavLink to={`/our-blogs/${item.id}`}>
                                                                <img src={`${imageurl}articles/${item.image}`} className='w-100' />
                                                            </NavLink>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <NavLink to={`/our-blogs/${item.id}`}>
                                                                <p style={{ fontSize: 'medium' }}>{item.title}</p>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
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
