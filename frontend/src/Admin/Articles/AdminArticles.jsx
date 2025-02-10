import React, { memo, useEffect, useState } from 'react'
import { deletedata, getdata } from '../../API/axioscreate'
import { deleteConfirmation } from '../../Sweetalert/Sweetalertdelete'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'
import Loadersmall from '../../components/Loader'

export default memo(function AdminArticles() {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)

    const fetchdata = async () => {
        setloading(true)
        const data = await getdata('articles')
        if (data.status == true) {
            setarticles(data.articles)
            setloading(false)
        }
    }

    const handledelete = async (id) => {
        deleteConfirmation(async () => {
            toast.success('Deleting Article....')
            const response = await deletedata('articles', id);

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
                            <h3>Articles</h3>
                        </div>
                        <div className="upper-create-button">
                            <NavLink to={'/admin/articles/create'} className='btn btn-primary'>Create</NavLink>
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
                                    {articles && articles.map((item, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.slug}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                <div className="d-flex">
                                                    <NavLink to={`/admin/articles/${item.id}/update`} className="btn btn-sm btn-secondary">Update</NavLink>
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
            </div >
        </>
    )
})
