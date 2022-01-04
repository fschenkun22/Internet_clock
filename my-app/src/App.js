// import React from 'react'
// import { Routes,Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element ={<Home/>}/>
//         <Route path='/login' element = {<Login/>}/>
//       </Routes>
//     </>
//   )
// }

// export default App

import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet/>
    </div>
  );
}