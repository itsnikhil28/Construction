import React, { memo, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import { deletedata, getdata } from '../../API/axioscreate'
import { deleteConfirmation } from '../../Sweetalert/Sweetalertdelete'
import Loadersmall from '../../components/Loader'

export default memo(function AdminServices() {
    const [services, setservices] = useState([])
    const [loading, setloading] = useState(false)

    const fetchdata = async () => {
        setloading(true)
        const data = await getdata('services')
        if (data.status == true) {
            setservices(data.services)
            setloading(false)
        } else {
            toast.error("Failed to fetch data");
        }
    }

    const handledelete = async (id) => {
        deleteConfirmation(async () => {
            toast.success('Deleting Service...')
            const response = await deletedata('services', id);

            if (response.status == true) {
                toast.success(response.success);
                fetchdata();
            }
        })
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <>
            <div className="col-md-8 shadow border-0 dashboard-radius">
                <div className="dashboard-description p-3">
                    <div className="upper-details d-flex justify-content-between pt-2">
                        <div className="upper-name">
                            <h3>Services</h3>
                        </div>
                        <div className="upper-create-button">
                            <NavLink to={'/admin/services/create'} className='btn btn-primary'>Create</NavLink>
                        </div>
                    </div>
                    {loading ? (
                        <Loadersmall />
                    ) : (
                        <div className="down-details table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services && services.map((item, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.slug}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                <div className="d-flex">
                                                    <NavLink to={`/admin/services/${item.id}/update`} className="btn btn-sm btn-secondary">Update</NavLink>
                                                    <NavLink onClick={() => handledelete(item.id)} className="btn btn-sm btn-danger ms-3">Delete</NavLink>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
})
