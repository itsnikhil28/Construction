import React, { memo, useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { getsingledata, updatedata } from '../../API/axioscreate';
import { toast } from 'react-toastify';
import { imageurl } from '../../API/axiosfrontcreate';

export default memo(function AdminTestinomialsUpdate() {
    const [data, setdata] = useState('');
    const id = useParams();

    const navigate = useNavigate();

    const getdata = async () => {
        const response = await getsingledata('testinomials', id.id);

        console.log(response)
        if (response.status == true) {
            setdata(response.testinomial)
        } else {
            toast.error('Something Went Wrong!!')
        }
    }

    const handleform = async (event) => {
        event.preventDefault();

        const formdata = new FormData(event.target);
        formdata.append('_method', 'PUT')
        const response = await updatedata('testinomials', id.id, formdata);

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
                        <h3>Testinomial / Update</h3>
                    </div>
                    <div className="upper-create-button">
                        <NavLink to={'/admin/testinomials'} className='btn btn-primary'>Back</NavLink>
                    </div>
                </div>
                <div className="down-details mt-3 p-3">
                    <form onSubmit={handleform}>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <div className="form-label">
                                    <label htmlFor="citation" className='mb-2'>Citation</label>
                                    <input type="text" placeholder='Citation Here' name='citation' id='citation' className='form-control' defaultValue={data.citation} />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-label">
                                    <label htmlFor="designation" className='mb-2'>Designation</label>
                                    <input type="text" placeholder='Designation Here' name='designation' id='designation' className='form-control' defaultValue={data.designation} />
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
                                    <label htmlFor="testinomial" className='mb-2'>Testinomial</label>
                                    <textarea type='text' placeholder='Testinomial Here' name='testinomial' id='testinomial' className='form-control' rows={5} defaultValue={data.testinomial} />
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
                                    <img src={`${imageurl}testinomials/${data.image}`} alt="Testinomial Image" className='w-100' />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className='btn btn-primary btn-large'>Update Testinomial</button>
                    </form>
                </div>
            </div>
        </div>
    )
})
