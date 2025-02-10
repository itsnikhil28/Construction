import React, { memo } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { createdata } from '../../API/axioscreate';
import { toast } from 'react-toastify';

export default memo( function AdminTestinomialsCreate() {
    const navigate = useNavigate();
    const handleform = async (event) => {
        event.preventDefault();

        const formdata = new FormData(event.target);
        const response = await createdata('testinomials', formdata);        

        if (response.status == true) {
            toast.success(response.success)
            navigate(-1)
        }
    }
    return (
        <>
            <div className="col-md-8 shadow border-0 dashboard-radius">
                <div className="dashboard-description p-3">
                    <div className="upper-details d-flex justify-content-between pt-2">
                        <div className="upper-name">
                            <h3>Article / Create</h3>
                        </div>
                        <div className="upper-create-button">
                            <NavLink to={'/admin/articles'} className='btn btn-primary'>Back</NavLink>
                        </div>
                    </div>
                    <div className="down-details mt-3 p-3">
                        <form onSubmit={handleform}>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <div className="form-label">
                                        <label htmlFor="citation" className='mb-2'>Citation</label>
                                        <input type="text" placeholder='Citation Here' name='citation' id='citation' className='form-control' />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-label">
                                        <label htmlFor="designation" className='mb-2'>Designation</label>
                                        <input type="text" placeholder='Designation Here' name='designation' id='designation' className='form-control' />
                                    </div>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <div className="form-label">
                                        <label htmlFor="testinomial" className='mb-2'>Testinomial</label>
                                        <textarea type='text' placeholder='Testinomial Here' name='testinomial' id='testinomial' className='form-control' rows={5} />
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
                                        <label htmlFor="status" className='mb-2'>Status</label>
                                        <select name='status' id='status' className='form-control' defaultValue=''>
                                            <option value="" disabled>Select Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className='btn btn-primary btn-large'>Add Testinomial</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
})
