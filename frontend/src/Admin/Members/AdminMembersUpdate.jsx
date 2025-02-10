import React, { memo, useEffect, useState } from 'react'
import { imageurl } from '../../API/axiosfrontcreate';
import { toast } from 'react-toastify';
import { getsingledata, updatedata } from '../../API/axioscreate';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export default memo(function AdminMembersUpdate() {
    const [data, setdata] = useState('');
    const id = useParams();

    const navigate = useNavigate();

    const getdata = async () => {
        const response = await getsingledata('members', id.id);

        if (response.status == true) {
            setdata(response.member)
        } else {
            toast.error('Something Went Wrong!!')
        }
    }

    const handleform = async (event) => {
        event.preventDefault();

        const formdata = new FormData(event.target);
        formdata.append('_method', 'PUT')
        const response = await updatedata('members', id.id, formdata);

        if (response.status == true) {
            toast.success(response.success)
            navigate(-1)
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <>
            <div className="col-md-8 shadow border-0 dashboard-radius">
                <div className="dashboard-description p-3">
                    <div className="upper-details d-flex justify-content-between pt-2">
                        <div className="upper-name">
                            <h3>Member / Update</h3>
                        </div>
                        <div className="upper-create-button">
                            <NavLink to={'/admin/members'} className='btn btn-primary'>Back</NavLink>
                        </div>
                    </div>
                    <div className="down-details mt-3 p-3">
                        <form onSubmit={handleform}>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <div className="form-label">
                                        <label htmlFor="name" className='mb-2'>Name</label>
                                        <input type="text" placeholder='Name Here' name='name' id='name' className='form-control' defaultValue={data.name} />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-label">
                                        <label htmlFor="job_title" className='mb-2'>Job Title</label>
                                        <input type="text" placeholder='Job Title Here' name='job_title' id='job_title' className='form-control' defaultValue={data.job_title} />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-label">
                                        <label htmlFor="linkedin_url" className='mb-2'>Linked-in Url</label>
                                        <input type='url' placeholder='Linked-in Url Here' name='linkedin_url' id='linkedin_url' className='form-control' defaultValue={data.linkedin_url} />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-label">
                                        <label htmlFor="status" className='mb-2'>Status</label>
                                        <select name='status' id='status' className='form-control' defaultValue={data.status || ''} key={data.status}>
                                            <option value="" disabled>Select Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-label">
                                        <label htmlFor="image" className='mb-2'>Image</label>
                                        <input type='file' placeholder='image Here' name='image' id='image' className='form-control' />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="form-label">
                                        <label htmlFor="image" className='mb-2'>Image</label>
                                        <img src={`${imageurl}members/${data.image}`} alt="Article Image" className='w-100' />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className='btn btn-primary btn-large'>Update Member</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
})
