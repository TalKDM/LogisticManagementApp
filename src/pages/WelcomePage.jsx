import React from 'react'
import '../style/welcomePage.css'
import { useNavigate } from 'react-router-dom'

const WelcomePage = (props) => {
    const nav = useNavigate()

    const yesOrNo =  () => {
        if(props.forkLiftLicense === true) {
            return 'yes'
        }else {
            return 'no'
        }
    };

    const findNotInPositionProducts = () => {
            props.allProducts.map((val,index) => {
            // const notInPosition = val.inPosition === false
            return (
                <div className="productSection">
                    <h2>NO.{val.productNumber}</h2>
                    <h1>2</h1>
                </div>
            )
        })
    }

    // let click = notInPosition[index].needForkLift = !notInPosition[index].needForkLift

    // const updateStateForklift = (index) => {
    //     const otherProducts = props.allProducts.filter(x => x.productNumber !== notInPosition[index].productNumber)
    //     let click = notInPosition[index].needForkLift 
    //     if(click === false) {
    //         props.allProducts[index].needForkLift = !props.allProducts[index].needForkLift
    //         const copyProducts = ([...otherProducts])
    //         props.setAllProducts(...copyProducts)
    //         nav(`/LogIn/${props.workerNumber}`)
    //     }else if (click === true){



    //     }
    // }

    const updateStateForklift = (index) => {
        const currentWorker = props.allWorkers.find(x => x.fullName === props.workerFullName).forkLiftLicense
        let click = props.allProducts[index].needForkLift 
        const otherProducts = props.allProducts.filter(x => x.productNumber !== props.allProducts[index].productNumber)
        if(click === false) {
            props.allProducts[index].needForkLift = !props.allProducts[index].needForkLift
            props.setAllProducts(otherProducts)
        }else if(click === true) {
            if(currentWorker === true) {
                props.allProducts[index].inPosition = !props.allProducts[index].inPosition
                props.setAllProducts(otherProducts)
            }else if(currentWorker === false) {
                alert('Worker does not have forklift license!')
            }
        }
    }

    // notInPosition.map((val,index) => {
    //     return (
    //         <div className="productSquare" key={index}>
    //             <h3>NO. {val.productNumber}</h3>
    //             <h3>Name: {val.productName}</h3>
    //             <h3>Need forklift truck: {val.needForkLift ? "yes" : "no"}</h3>
    //             <button className='updateBtn' onClick={() => {updateStateForklift(index)}}>Update</button>
    //         </div>
    //     )
    // })





  return (
    <div className='mainWelcomePage'>
        <div className="welcomeSection">
            <div className="welcomeTitle">
                <h1>Welcome: {props.workerFullName}</h1>
            </div>
            <div className="welcomeDetails">
                <h3>Details</h3>
                <p>Full Name : {props.workerFullName}</p>
                <p>NO.: {props.workerNumber}</p>
                <p>Forklift truck license: {yesOrNo()}</p>
            </div>
            <div className="welcomeProducts">
                <h3>List of products</h3>
                {
                props.allProducts.filter(x => x.inPosition === false).map((val,index) => {
                    return (
                        <div className="productSquare" key={index}>
                        <h3>NO. {val.productNumber}</h3>
                        <h3>Name: {val.productName}</h3>
                        <h3>Need forklift truck: {val.needForkLift ? "yes" : "no"}</h3>
                        <button className='updateBtn' onClick={() => {updateStateForklift(index)}}>Update</button>
                    </div>
                    )
                })
                }
            </div>
            <div className="logOutBtnDiv">
                <button  onClick={() => {nav('/')}} className='logoutBtn' >Logout</button>
            </div>
        </div>
        
    </div>
  )
}

export default WelcomePage