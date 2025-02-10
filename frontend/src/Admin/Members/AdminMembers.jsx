import React, { memo, useEffect, useState } from 'react'
import { deletedata, getdata } from '../../API/axioscreate'
import { toast } from 'react-toastify'
import { deleteConfirmation } from '../../Sweetalert/Sweetalertdelete'
import { NavLink } from 'react-router-dom'

export default memo(function AdminMembers() {
    const [members, setmembers] = useState([])

    const fetchdata = async () => {
        const data = await getdata('members')
        if (data.status == true) {
            setmembers(data.members)
        }
    }

    const handledelete = async (id) => {
        deleteConfirmation(async () => {
            const response = await deletedata('members', id);

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
                            <h3>Members</h3>
                        </div>
                        <div className="upper-create-button">
                            <NavLink to={'/admin/members/create'} className='btn btn-primary'>Create</NavLink>
                        </div>
                    </div>
                    <div className="down-details table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Job Title</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members && members.map((item, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.job_title}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <div className="d-flex">
                                                <NavLink to={`/admin/members/${item.id}/update`} className="btn btn-sm btn-secondary">Update</NavLink>
                                                <NavLink onClick={() => handledelete(item.id)} className="btn btn-sm btn-danger ms-3">Delete</NavLink>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
})
