import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Index from './pages/Index';
import SignUp from './pages/SignUp';
import { useState } from 'react';
import LogIn from './pages/LogIn';
import WelcomePage from './pages/WelcomePage';
import Manager from './pages/Manager';


function App() {
  const [workerNumber,setWorkerNumber] = useState('');
  const [workerFullName,setWorkerFullName] = useState('');
  const [forkLiftLicense,setForkLiftLicense] = useState(false);
  const [errors,setErrors] = useState([]);
  const [allWorkers,setAllWorkers] = useState([])
 


  class Worker {
    workerNumber = ""
    fullName = ""
    forkLiftLicense = false
    wareHouseVisit = ""
  };

  class Product {
    productNumber = ""
    productName = ""
    needForkLift = false
    inPosition = false
  };

  const product = new Product() 
  const product1 = new Product() 
  const product2 = new Product() 
  const product3 = new Product() 
  const product4 = new Product() 
    {
      product.productNumber = '11122'
      product.productName = 'Green Box'
      product.needForkLift = false
      product.inPosition = false
    }
    {
      product1.productNumber = '22554'
      product1.productName = 'Green Box'
      product1.needForkLift = false
      product1.inPosition = false
    }
    {
      product2.productNumber = '66698'
      product2.productName = 'Blue Box'
      product2.needForkLift = true
      product2.inPosition = false
    }
    {
      product3.productNumber = '78544'
      product3.productName = 'Red Box'
      product3.needForkLift = false
      product3.inPosition = false
    }
    {
      product4.productNumber = '69875'
      product4.productName = 'Red Box'
      product4.needForkLift = false
      product4.inPosition = false
    }
    const [allProducts,setAllProducts] = useState([product,product1,product2,product3,product4])

    // const products = [product,product1,product2,product3,product4];

  



  const checkNewWorker = () => {
    const fullNameRegEx = /^[A-Za-z\s]*$/
    const error = {};
    if(workerNumber.length !== 5) {
      error.workerNumber = 'The number must be with 5 digits!'
    }if (!fullNameRegEx.test(workerFullName) || workerFullName.length < 4) {
      error.workerFullName = 'The name must contain minimum 4 characters!'
    }
    setErrors(error);
  }

  const signUp = () => {
    checkNewWorker()
    if(workerNumber.length === 5 && workerFullName.length >= 4 ) {
      const newWorker = new Worker() 
      newWorker.workerNumber = workerNumber;
      newWorker.fullName = workerFullName;
      newWorker.forkLiftLicense = forkLiftLicense;
      newWorker.wareHouseVisit = "";
      const checkWorkerName = allWorkers.find(x => x.fullName === newWorker.fullName);
      const checkWorker = allWorkers.find(x => x.workerNumber === newWorker.workerNumber); 
      if(checkWorker) {
        alert('Worker already exist in the system!')
        return
      }if (checkWorkerName) {
        const find = allWorkers.filter(x => x.fullName === checkWorkerName.fullName)
        const findNames = find.map(val => val.fullName)
        if(findNames > 1) {
          alert('you cant sign up,there is a limit of 2 workers with the same name in the system!')
          return
        }
      }else {
        setAllWorkers([...allWorkers, newWorker])
        alert('Worker created!')
        console.log(newWorker);
      }
  }
}



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/SignUp' element={<SignUp setWorkerNumber={setWorkerNumber} setWorkerFullName={setWorkerFullName} setForkLiftLicense={setForkLiftLicense} forkLiftLicense={forkLiftLicense} signUp={signUp} errors={errors}/>} />
          <Route path='/LogIn' element={<LogIn setWorkerNumber={setWorkerNumber} workerNumber={workerNumber} allWorkers={allWorkers} />} />
          <Route path={`/LogIn/${workerNumber}`} element={<WelcomePage allWorkers={allWorkers} workerFullName={workerFullName} workerNumber={workerNumber} forkLiftLicense={forkLiftLicense} allProducts={allProducts} setAllProducts={setAllProducts}/>} />
          <Route path='/Manager' element={<Manager allWorkers={allWorkers}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
