import React from 'react'
import '../style/manager.css'
import { useNavigate } from 'react-router-dom'

const Manager = (props) => {

  const nav = useNavigate()
  return (
    <div className='mainManager'>
        <div className="managerTitle">
            <h1>Manager</h1>
            <div className="managerTable">
              <table>
                <thead>
                  <th>NO</th>
                  <th>FullName</th>
                  <th>Counter</th>
                  <th>Number of products</th>
                </thead>
                <tbody>
                  {/* לסיים את הטבלה */}
                {
                  props.allWorkers.map((val,index) => {
                    return (
                      <tr key={index}>
                        <td>{val.workerNumber}</td>
                        <td>{val.fullName}</td>
                        <td></td>
                        <td></td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
            </div>
        </div>
        <div className="managerLogout">
          <button onClick={() => {nav('/')}}>Logout</button>
        </div>
    </div>
  )
}

export default Manager