import React, { useContext, useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import route from './routes'
import Header from './layout'
import Login from './pages/Login'

import context from './component/context/maincontext'
const App = () => {
  const {loggedIn}=useContext(context)

  //  const [loggedIn,setLoggedIn]=useState(false)
  return (
    <div>
    
      <Router>
        <Header/>

        {  !loggedIn?(<Login/>):(
        <Routes>
        {route.map((n)=>{
          return (<Route path={n.path} element={n.component} key={n.path}/>)
        })}
        </Routes>
        )}
      </Router>
    
    </div>
  )
}

export default App
