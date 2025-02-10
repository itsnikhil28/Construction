import React from 'react'

export default function Commonherosection({ preheading, heading, text }) {
    return (
        <div className="section-8">
            <div className='hero-section d-flex justify-content-center align-items-center'>
                <div className="container">
                    <div className="text-left">
                        <h6>{preheading}</h6>
                        <h1>{heading}</h1>
                        {text && (<p className='mt-3' dangerouslySetInnerHTML={{ __html: text }}></p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
