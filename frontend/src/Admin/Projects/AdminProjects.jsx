import React, { memo, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import { deletedata, getdata } from '../../API/axioscreate'
import { deleteConfirmation } from '../../Sweetalert/Sweetalertdelete'

export default memo(function AdminProjects() {
    const [projects, setprojects] = useState([])

    const fetchdata = async () => {
        const data = await getdata('projects')
        if (data.status == true) {
            setprojects(data.projects)
        }
    }

    const handledelete = async (id) => {
        deleteConfirmation(async () => {
            const response = await deletedata('projects', id);

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
                            <h3>Projects</h3>
                        </div>
                        <div className="upper-create-button">
                            <NavLink to={'/admin/projects/create'} className='btn btn-primary'>Create</NavLink>
                        </div>
                    </div>
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
                                {projects && projects.map((item, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.slug}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <div className="d-flex">
                                                <NavLink to={`/admin/projects/${item.id}/update`} className="btn btn-sm btn-secondary">Update</NavLink>
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
