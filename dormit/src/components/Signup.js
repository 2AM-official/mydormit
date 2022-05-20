import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"


const Signup = ({onAdd}) => {

    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [pnumber, setPNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        // if(!text) {
        //     alert('Please add a task')
        //     return
        // }
        // const user = {
        //     firstname: fname,
        //     lastname: lname,
        //     phonenumber: pnumber,
        //     email: email,
        //     password: password
        // }

        // loginRef.push(user)

        onAdd({fname, lname, pnumber, email, password})

        setFName('')
        setLName('')
        setPNumber('')
        setEmail('')
        setPassword('')
    }

    return (
        
    <form className='add-form' onSubmit={onSubmit}>
        <h1>Welcome!</h1>
        <div className='name'>
            <div className='name-control'>
                <label>First Name</label>
                <input type='text' 
                placeholder='Add First Name' 
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                required/>
            </div>
            <div className='name-control'>
                <label>Last Name</label>
                <input type='text' 
                placeholder='Add Last Name' 
                value={lname}
                onChange={(e) => setLName(e.target.value)}
                required/>
            </div>
        </div>
        <div className='form-control'>
            <label>Phone Number</label>
            <input type='text' 
            placeholder='Add Phone Number' 
            value={pnumber}
            onChange={(e) => setPNumber(e.target.value)}
            required/>
        </div>
        <div className='form-control'>
            <label>Email</label>
            <input type='text' 
            placeholder='Add Email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input type='password' 
            placeholder='Add Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
        </div>
        <div className='create'>
            <input type='submit' value='Creat Account'
            className='btn btn-block'></input>
        </div>
        <h5><Link to = "/login">Already have a Dormit Account?</Link></h5>
    </form>
    )
}

export default Signup