import React from 'react'
import Card from './Component/Home/Card'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Msg from './Component/Home/Msg'
 
 const App = () => {
   return (
     <div>
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Card/>}/>
         <Route path='/create' element={<Msg/>}/>
       </Routes >
       </BrowserRouter>
      
     </div>
   )
 }
 

 export default App

// import React from 'react'
// import { BrowserRouter, Router, Routes } from 'react-router-dom'
// import Home from './Comp2/Home/Home'
// import Second from './Comp2/Home/Second'

//  const App = () => {
//   return (
//     <div>
//       <Second/>
//       <Home/>

//       <BrowserRouter>
//           <Router>
//             <Routes path/>
//           </Router>
//       </BrowserRouter>
  
//     </div>
//   )
// }

// export default App