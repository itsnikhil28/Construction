import React, { memo } from 'react'

export default memo( function Dashboard() {
    return (
        <>
            <div className="col-md-8 shadow border-0 dashboard-radius ms-md-4 d-flex justify-content-center align-items-center">
                <div className="dashboard-description p-4">
                    <h5>Welcome to Admin Dashboard</h5>
                </div>
            </div>
        </>
    )
})
