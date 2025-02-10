import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { getdata, imageurl } from '../API/axiosfrontcreate';
import Loadersmall from './Loader';

export default function Maintestinomial() {
    const [testinomials, settestinomials] = useState([])
    const [loading, setloading] = useState(false)

    const fetchdata = async () => {
        setloading(true)
        const data = await getdata('testinomial')

        if (data.status == true) {
            settestinomials(data.testinomials)
            setloading(false)
        } else {
            toast.error("Failed to fetch data");
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div className="section-6">
            <div className="main-services">
                <div className="container-fluid py-5">
                    <div className="section-header py-5">
                        <div className="text-center">
                            <h5>Testinomial</h5>
                            <h1>What People are saying about us</h1>
                            <p className='mb-0 mt-3' >We offer a diverse array of construction services, spanning residental, commercial, and industrial projects.</p>
                        </div>
                        <div className="container">
                            {loading ? (
                                <Loadersmall />
                            ) : (
                                <div className="row py-4">
                                    <Swiper
                                        modules={[Pagination]}
                                        spaceBetween={50}
                                        // slidesPerView={1}
                                        pagination={{ clickable: true }}
                                        breakpoints={{
                                            320: { slidesPerView: 1, spaceBetween: 20 }, // Extra small screens
                                            576: { slidesPerView: 1, spaceBetween: 20 }, // Small screens
                                            768: { slidesPerView: 2, spaceBetween: 30 }, // Medium screens
                                            1024: { slidesPerView: 3, spaceBetween: 30 }, // Large screens
                                            1200: { slidesPerView: 3, spaceBetween: 30 }, // Extra-large screens
                                        }}
                                    >
                                        {testinomials && testinomials.map((item, i) => (
                                            <SwiperSlide key={i}>
                                                <div className="card shadow border-0">
                                                    <div className="px-3 py-3">
                                                        <div className="card-rating mb-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="card-content">
                                                                <p>{item.testinomial}</p>
                                                            </div>
                                                            <hr />
                                                            <div className="card-testinomial">
                                                                <div className="testinomial-detail d-flex">
                                                                    <div className="testinomial-image">
                                                                        <img src={`${imageurl}testinomials/${item.image}`} alt="" />
                                                                    </div>
                                                                    <div className="testinomial-name">
                                                                        <h5>{item.citation}</h5>
                                                                        <p>{item.designation}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
