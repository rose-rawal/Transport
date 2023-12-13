import React, { useContext, useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import route from './routes'
import Header from './layout'
import Login from './pages/Login'
import './App.css'
import context from './component/context/maincontext'
import IndividualItem from './pages/IndividualItem'
import Payment from './pages/Payment'
import SuccessCash from './pages/mini/SuccessCash'
const App = () => {
  const {loggedIn,success}=useContext(context)

  //  const [loggedIn,setLoggedIn]=useState(false)
  return (
    <div className='overflow-hidden relative'>
    {success?<SuccessCash/>:<></>}
      <Router>
        <Header/>

        {  !loggedIn?(<Login/>):(
        <Routes>
        {route.map((n)=>{
          return (<Route path={n.path} element={n.component} key={n.path}/>)
        })}
        <Route path='/car/:id' element={<IndividualItem/>} key='/car/:id'/>
        <Route path='/car/payment/:id' element={<Payment/>} key='/car/payment/:id'/>
        </Routes>
        )}
      </Router>
    
    </div>
  )
}

export default App
