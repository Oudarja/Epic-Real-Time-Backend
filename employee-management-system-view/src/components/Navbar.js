import React from 'react'
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
  
  const navigate=useNavigate();
  // const handleClick=()=>
  //   {
  //     // his line clears the entire local storage.
  //     // Local storage is a way to store data in the
  //     // browser that persists even after the page is
  //     // refreshed or the browser is closed. By clearing
  //     // the local storage, you're removing any data that was previously stored there.
  //      window.location.reload();
  //   }

  return (
    <div className="bg-amber-950 h-16 px-16 items-center flex">
    <h1 className="text-3xl font-bold text-green-500">EM Service Incharge</h1>
    <div className="space-x-4 ml-auto">
    <a className="hover:text-blue-400" onClick={()=>{navigate("/")}} href="/">Home</a>
    <a className="hover:text-blue-400" onClick={()=>{navigate("/")}} href="/">Profile</a>
    {/* <a className="hover:text-blue-400"onClick={()=>handleClick()} href="/">Logout</a> */}
  </div>

  </div>
 
  )
}

export default Navbar
