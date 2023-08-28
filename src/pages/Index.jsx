import React from 'react'
import '../style/index.css'
import { useNavigate } from 'react-router-dom'
const Index = () => {

    const nav = useNavigate()
  return (
    <div className='mainIndex'>
        <div className="indexLogInSection">
        <div className="indexTitle">
            <h2>Logistic Management</h2>
        </div>
        <div className="indexButtons">
            <button onClick={() => {nav('/SignUp')}}>Sign up</button><br />
            <button onClick={() => {nav('/LogIn')}}>Log in</button>
        </div>
        </div>
    </div>
  )
}

export default Index