import React, { useState } from 'react'
import '../style/signUp.css'

const SignUp = (props) => {

    const radioBtnChange = e => {
        if(e.target.value === 'true') {
            return props.setForkLiftLicense(true)
        }else if(e.target.value === 'false') {
            return props.setForkLiftLicense(false)
        }
      }



  return (
    <div className='mainSignUp'>
        <div className="signUpSection">
        <div className="signUpTitle">
            <h2>Sign up</h2>
        </div>
        <div className="signUpInputs">
            <label htmlFor="number">NO. :</label>
            <input type="text" name='number' placeholder='Enter your worker number:' onChange={(e) => {props.setWorkerNumber(e.target.value)}}/>
            {props.errors && <p className='error'>{props.errors.workerNumber}</p>}
            <label htmlFor="fullName">Full Name :</label>
            <input type="text" name='fullName' placeholder='Enter your worker number:' onChange={(e) => {props.setWorkerFullName(e.target.value)}}/>
            {props.errors && <p className='error'>{props.errors.workerFullName}</p>}
            </div>
            <div className="signUpRadio">
            <p>Forklift truck</p>
            <input type="radio" name="forkLift" value='true' id='yes' onChange={radioBtnChange} />
            <label htmlFor="yes">yes</label>
            <input type="radio" name="forkLift" value='false' id='no' onChange={radioBtnChange} />
            <label htmlFor="no">no</label>
            </div>
            <div className="signUpButton">
            <button onClick={props.signUp}>Create</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp