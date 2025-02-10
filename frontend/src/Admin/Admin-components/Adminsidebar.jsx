import React, { memo, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { NavLink, useNavigate } from 'react-router-dom'
import { Authcontext } from '../../Authcheck/Context'
import { logout } from '../../API/axioscreate'
import { getuserdetails } from '../../API/Localitem'
import { Logoutloader } from '../../components/Loader'

export default memo(function Adminsidebar() {
    const navigate = useNavigate()
    const { logoutuser } = useContext(Authcontext)
    const [loading, setloading] = useState(false)

    const logoutuserdata = async () => {
        setloading(true)
        const user_details = getuserdetails();
        const formdata = new FormData();
        formdata.append('id', user_details.id)

        const data = await logout(formdata);
        if (data.status == 401) {
            logoutuser();
            navigate('/admin');
            toast.error(data.data.message)
            setloading(false)
        }
        if (data.status == 200) {
            logoutuser();
            navigate('/admin');
            toast.success(data.data.success)
            setloading(false)
        }
    }

    const handlelogout = () => {
        logoutuserdata();
    }
    return (
        <>
            <div className="col-md-3 shadow border-0 dashboard-radius-1">
                <div className="dashboard-details p-4">
                    <h4>Sidebar</h4>
                    <ul>
                        <li><NavLink to={'/admin/dashboard'}>Dashboard</NavLink></li>
                        <li><NavLink to={'/admin/articles'}>Articles</NavLink></li>
                        <li><NavLink to={'/admin/services'}>Services</NavLink></li>
                        <li><NavLink to={'/admin/projects'}>Projects</NavLink></li>
                        <li><NavLink to={'/admin/testinomials'}>Testinomials</NavLink></li>
                        <li><NavLink to={'/admin/members'}>Members</NavLink></li>
                        <li style={{ borderBottom: 0 }}>
                            {loading ? (
                                <>
                                    <Logoutloader />
                                    <button disabled className='btn btn-primary mt-3'>Logging Out...</button>
                                </>
                            ) : (
                                <button onClick={handlelogout} className='btn btn-primary mt-3'>Logout</button>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
})
