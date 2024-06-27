import React from 'react'

export default function DThListUsers({renderDthListUsers}) {

    let dthElementUser = renderDthListUsers.map((dthUser, index)=>{
        return (
            <>
                <tr>
                    <td>{dthUser.id}</td>
                    <td>{dthUser.name}</td>
                    <td>{dthUser.password}</td>
                    <td>{dthUser.phone}</td>
                    <td>{dthUser.email}</td>
                    <td>
                        <button type='button' className='btn btn-danger mx-3'>Xóa</button>
                        <button type='button' className='btn btn-warning'>Sửa</button>
                    </td>
                    
                </tr>
            </>
        )
    })

  return (
    <div className='row'>
        <div className='col-md-12'>
        <table className='table table-borderd'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>chức năng</th>
                </tr>
            </thead>
            <tbody>
            {dthElementUser}
            </tbody>
        </table>
        </div>
        
    </div>
  )
}
