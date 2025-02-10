import React, { useEffect, useState } from 'react'
import MainHerosection from '../components/Main-Herosection'
import Main_Aboutus from '../components/Main-Aboutus'
import Mainservices from '../components/Main-services'
import Whychooseus from '../components/Why-choose-us'
import Mainprojects from '../components/Main-projects'
import Mainblogs from '../components/Main-blog'
import Maintestinomial from '../components/Main-testinomial'

export default function Main() {
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(true);
        setTimeout(() => setloading(false), 3000);
    }, []);
    return (
        <main>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    {/* Hero Section */}
                    <MainHerosection />

                    {/* About Us */}
                    <Main_Aboutus />

                    {/* Services */}
                    <Mainservices />

                    {/* Choose Us */}
                    <Whychooseus />

                    {/* Projects */}
                    <Mainprojects />

                    {/* Testimonials */}
                    <Maintestinomial />

                    {/* Blogs */}
                    <Mainblogs />
                </>
            )}
        </main>
    )
}
