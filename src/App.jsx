import React from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Navbar from './Layouts/Navbar'
import B2bdatabase from './Pages/B2bdatabase'
import Emailfinder from './Pages/Emailfinder'
import Emailverify from './Pages/Emailverify';
import Findemail from "./Pages/Findemail";
import EmailFinder2 from "./Pages/EmailFinder2";
import EmailVerifier2 from "./Pages/EmailVerifier2";
export default function App() {
  return (
   
    <Router className="font-poppins">
        <Navbar/>
        <Routes>
            <Route exact path='/' Component={B2bdatabase}/>
            <Route exact path='/b2bdatabase' Component={B2bdatabase}/>
            <Route exact path='/emailfinder' Component={Emailfinder}/>
            <Route exact path='/emailverify' Component={Emailverify}/>
            <Route exact path='/emailverifier2' Component={EmailVerifier2}/>
            <Route exact path='/findemail' Component={Findemail}/>
            <Route exact path='/emailfinder2' Component={EmailFinder2}/>
        </Routes>
    </Router>

  )
}
