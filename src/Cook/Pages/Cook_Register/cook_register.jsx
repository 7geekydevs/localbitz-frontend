import React from 'react'
import '../Cook_Register/cook_register.css'
import { useState } from 'react'    // useState is a hook
import { Link } from 'react-router-dom'

const Cook_reg = () => {

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    // const baseURL = 'https://localbitz.deta.dev';

    const submit= async (e)=>{
        e.preventDefault();
        
        const response = await fetch('https://localbitz.deta.dev/cooks', {
            headers: {'Accept': 'application/json, text/plain, */*',
                'Content-Type' : 'application/json'},
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password})}
        )
        
        const content = await response.json()
        console.log(content)
    }
        

    return (
        <div className="register">
        <form>
            <h1 className="register-heading">Please Register</h1>
            <input type="text" name="name" placeholder="Name" required="required" className="register-name" 
                onChange={e=>setName(e.target.value)}/>
            <input type="email" name="email" placeholder="Email" required="required" className="register-email" 
                onChange={e=>setEmail(e.target.value)}/>
            <input type="password" name="password" placeholder="Password" required="required" className="register-password"
                onChange={e=>setPassword(e.target.value)}/>
            <button type="submit" className="reg-button" onClick={submit}>Register</button>

            <Link to="cooks/login" className="register-login">Already have an account?</Link> 
        </form>
        </div>
    )
}

export default Cook_reg
