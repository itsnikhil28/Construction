import React, { memo, useEffect, useState } from 'react'
import { imageurl } from '../../API/axiosfrontcreate'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getsingledata, updatedata } from '../../API/axioscreate';
import { toast } from 'react-toastify';

export default memo(function AdminProjectsUpdate() {
    const [data, setdata] = useState('');
    const id = useParams();

    const navigate = useNavigate();

    const getdata = async () => {
        const response = await getsingledata('projects', id.id);

        if (response.status == true) {
            setdata(response.project)
        } else {
            toast.error('Something Went Wrong!!')
        }
    }

    const handleform = async (event) => {
        event.preventDefault();

        const formdata = new FormData(event.target);
        formdata.append('_method', 'PUT')
        const response = await updatedata('projects', id.id, formdata);

        if (response.status == true) {
            toast.success(response.success)
            navigate(-1)
        }
    }

    useEffect(() => {
        getdata();
    }, [])
    return (
        <div className="col-md-8 shadow border-0 dashboard-radius">
            <div className="dashboard-description p-3">
                <div className="upper-details d-flex justify-content-between pt-2">
                    <div className="upper-name">
                        <h3>Project / Update</h3>
                    </div>
                    <div className="upper-create-button">
                        <NavLink to={'/admin/projects'} className='btn btn-primary'>Back</NavLink>
                    </div>
                </div>
                <div className="down-details mt-3 p-3">
                    <form onSubmit={handleform}>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <div className="form-label">
                                    <label htmlFor="title" className='mb-2'>Title</label>
                                    <input type="text" placeholder='Title Here' name='title' id='title' className='form-control' defaultValue={data.title} />
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="form-label">
                                    <label htmlFor="slug" className='mb-2'>Slug ( You can enter your own or leave blank to automatically create )</label>
                                    <input type="slug" placeholder='Slug Here' name='slug' id='slug' className='form-control' defaultValue={data.slug} />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-label">
                                    <label htmlFor="location" className='mb-2'>Location</label>
                                    <input type="location" placeholder='Location Here' name='location' id='location' className='form-control' defaultValue={data.location} />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-label">
                                    <label htmlFor="construction_type" className='mb-2'>Construction Type</label>
                                    <select name='construction_type' id='construction_type' className='form-control' defaultValue={data.construction_type || ''} key={data.construction_type}>
                                        <option value="" disabled>Select Construction Type</option>
                                        <option value="Residential Construction">Residential Construction</option>
                                        <option value="Commericial Construction">Commericial Construction</option>
                                        <option value="Industrial Construction">Industrial Construction</option>
                                        <option value="Infrastructial Construction">Infrastructial Construction</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-label">
                                    <label htmlFor="sector" className='mb-2'>Sector</label>
                                    <select name='sector' id='sector' className='form-control' defaultValue={data.sector || ''} key={data.sector}>
                                        <option value="" disabled>Select Sector</option>
                                        <option value="Health">Health</option>
                                        <option value="Education">Education</option>
                                        <option value="Corporate">Corporate</option>
                                    </select>
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
                            <div className="col-md-12 mb-3">
                                <div className="form-label">
                                    <label htmlFor="short_desc" className='mb-2'>Short Description</label>
                                    <input type="text" placeholder='Short Description Here' name='short_desc' id='short_desc' className='form-control' defaultValue={data.short_desc} />
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="form-label">
                                    <label htmlFor="content" className='mb-2'>Content</label>
                                    <textarea type='text' placeholder='Content Here' name='content' id='content' className='form-control' rows={5} defaultValue={data.content} />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-label">
                                    <label htmlFor="image" className='mb-2'>Update Image</label>
                                    <input type='file' placeholder='image Here' name='image' id='image' className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-label">
                                    <label htmlFor="image" className='mb-2'>Image</label>
                                    <img src={`${imageurl}projects/${data.image}`} alt="Project Image" className='w-100' />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className='btn btn-primary btn-large'>Update Project</button>
                    </form>
                </div>
            </div>
        </div>
    )
})
