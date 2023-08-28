import React from 'react'
import '../style/login.css'
import { useNavigate } from 'react-router-dom'

const LogIn = (props) => {

    const nav = useNavigate()

    const logIn = () => {
        const findWorker = props.allWorkers.find(x => x.workerNumber === props.workerNumber)
        if(props.workerNumber === '99999') {
          nav('/Manager')
        }else if(!findWorker) {
          alert(`Worker number ${props.workerNumber} not found!`)
        }else if (findWorker) {
          nav(`/LogIn/${props.workerNumber}`)
        }
      }
      
  return (
    <div className='mainLogIn'>
        <div className="logInSection">
            <div className="logInTitle">
                <h2>Login</h2>
            </div>
            <div className="logInInputs">
                <label htmlFor="number">NO. :</label>
                <input type="text" name='number' placeholder='Enter your worker number:' onChange={(e) => {props.setWorkerNumber(e.target.value)}}/>
                <div className="logInButton">
                    <button onClick={logIn}>Enter</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn