import React from 'react'
import { createdata } from '../API/axiosfrontcreate';
import { toast } from 'react-toastify';

export default function Contact() {
    const handleform = async (event) => {
        event.preventDefault();
        toast.success('Please wait...')

        const formdata = new FormData(event.target);
        const response = await createdata('contact', formdata);

        if (response.status == true) {
            toast.success(response.success)
            event.target.reset();
        }
    }
    return (
        <div className="section-10">
            <div className="main-services">
                <div className="container py-5">
                    <div className="section-header py-5">
                        <div className="text-center">
                            <h1>Contact Us</h1>
                            <p className='mb-0 mt-3' >Our dedicated experts are here to help you with any of your questions, contact us by <br /> filling out the form below and we will contact you shortly.</p>
                        </div>
                    </div>
                    <div className="row px-5">
                        <div className="col-md-3 shadow border-0 contact-radius">
                            <div className="contact-details p-4">
                                <div className="contact-phone">
                                    <h4>Call Us : </h4>
                                    <p>800-800-8000 <br />639-987-5987</p>
                                </div>
                                <div className="contact-email">
                                    <h4>You can write us : </h4>
                                    <p>info@example.com <br /> admin@gmail.com</p>
                                </div>
                                <div className="contact-address">
                                    <h4>Address : </h4>
                                    <p>B-18X, Rajaji Puram<br />Civil Lines<br />Moradabad</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 shadow border-0 contact-radius ms-md-4">
                            <div className="contact-form p-4">
                                <form onSubmit={handleform}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-label">
                                                <label htmlFor="name" className='mb-2'>Name</label>
                                                <input type="text" placeholder='Enter Your Name' name='name' id='name' className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-label">
                                                <label htmlFor="email" className='mb-2'>Email</label>
                                                <input type="email" placeholder='Enter Your Email' name='email' id='email' className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-label">
                                                <label htmlFor="phone" className='mb-2'>Phone Number</label>
                                                <input type="tel" placeholder='Phone Number' name='number' id='phone' className='form-control' inputMode='numeric' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-label">
                                                <label htmlFor="subject" className='mb-2'>Subject</label>
                                                <input type="text" placeholder='Subject' name='subject' id='subject' className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <div className="form-label">
                                                <label htmlFor="message" className='mb-2'>Message</label>
                                                <textarea type='text' placeholder='Your Message' name='message' id='message' className='form-control' rows={5} />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className='btn btn-primary btn-large'>Send now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
