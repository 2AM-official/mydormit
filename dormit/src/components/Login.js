import React from 'react'

const Login = () => {
  return (
    <form className='add-form'>
        <div className='name'>
            <div className='name-control'>
                <label>First Name</label>
                <input type='text' placeholder='Add First Name' />
            </div>
            <div className='name-control'>
                <label>Last Name</label>
                <input type='text' placeholder='Add Last Name' />
            </div>
        </div>
        <div className='form-control'>
            <label>Phone Number</label>
            <input type='text' placeholder='Add Phone Number' />
        </div>
        <div className='form-control'>
            <label>Email</label>
            <input type='text' placeholder='Add Email' />
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input type='text' placeholder='Add Password' />
        </div>
        <input type='submit' value='creat Account'></input>
    </form>
  )
}

export default Login