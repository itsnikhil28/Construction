import React, { memo, useContext, useState } from 'react'
import { login } from '../API/axioscreate';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Authcheck/Context';
import { Formloader } from '../components/Loader';

export default memo(function Login() {
    const { loginuser, user } = useContext(Authcontext);
    const navigate = useNavigate();
    const [loading, setloading] = useState(false)

    if (user) {
        return <Navigate to={'/admin/dashboard'} />
    }

    const handleform = async (event) => {
        event.preventDefault();
        setloading(true)
        var formdata = new FormData(event.target);
        const details = await login(formdata);

        if (details.data.status == true) {
            localStorage.setItem('user_details', JSON.stringify(details.data.user));
            localStorage.setItem('token', JSON.stringify(details.data.token))
            toast.success(details.data.success);
            loginuser(details.data.user)
            navigate('/admin/dashboard');
            setloading(false)
        }else{
            setloading(false)
        }
    }
    return (
        <>
            <div className="section-10 pb-5">
                <div className="main-services pb-5">
                    <div className="container py-5">
                        {loading ? (
                            <Formloader />
                        ) : (
                            <>
                                <div className="section-header py-5">
                                    <div className="text-center">
                                        <h1>Login</h1>
                                    </div>
                                </div>
                                <div className="row px-5 d-flex justify-content-center">
                                    <div className="col-md-4 shadow border-0 contact-radius">
                                        <div className="contact-form p-4">
                                            <form onSubmit={handleform}>
                                                <div className="row">
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-label">
                                                            <label htmlFor="email" className='mb-2'>Email</label>
                                                            <input type="email" placeholder='Enter Your Email' name='email' id='email' className='form-control' />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-label">
                                                            <label htmlFor="password" className='mb-2'>Password</label>
                                                            <input type="password" placeholder='Enter Your Password' name='password' id='password' className='form-control' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className='btn btn-primary btn-large'>Login</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
})
