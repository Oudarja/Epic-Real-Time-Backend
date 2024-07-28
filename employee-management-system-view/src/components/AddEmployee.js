import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService'
const AddEmployee = () => {

  const [employee,setEmployee]=useState({
     id:"",
     name:"",
     phone:"",
     email:"",
  })
  // handleChange function looks good for handling 
  // input changes in a React component. It takes 
  // an event e, retrieves the value from the
  //  input, and updates the employee state using
  //  the spread operator. This way, you maintain 
  // the existing state while updating only the 
  // specific field that changed.

  //  This function works on input field value changing
    const handleChange=(e)=>{
           const value=e.target.value;
           setEmployee({...employee,[e.target.name]:value})
    }
// e refers to the event object that is automatically passed
//  to the event handler by the React framework
// (e) is parameter which is event and after arrow => the 
// function definition is here.
// reset is a variable that holds a function.
    const reset=(e)=>{
       e.preventDefault();
       setEmployee({
        id:"",
     name:"",
     phone:"",
     email:"",
       });
    }
    // Inside the function, e.preventDefault() is 
    // called to prevent the default behavior of 
    // the event (like preventing a form submission). 
    // Then, setEmployee is called to reset the employee
    //  state to its initial values.


    const saveEmployee=(e)=>{
      e.preventDefault();
      // employee has id,name,phone,email all data 
      // remember about handle change 
      EmployeeService.saveEmployee(employee)
      .then((response)=>{
         console.log(response);
         navigate("/")
      })
      .catch((error)=>{
          console.log(error);
      })
    }

    const navigate=useNavigate();

  return (
    <div className='max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8'>
     <div className='text-4xl tracking-wider font-bold text-center py-4 px-8'>
      <p>Add New Employee</p>
    </div>

   <div className='mx-10 my-2'>
      <input type="text" name="name" 
      // On change of input field handle change function is called 
      // with event e
      value={employee.name}
      onChange={(e)=>handleChange(e)}
      className="w-full py-2 my-4 text-slate-800" placeholder='Name' required></input>
      
      <input type="number" name="phone" 
      value={employee.phone}
       onChange={(e)=>handleChange(e)}
      className="w-full py-2 my-4 text-slate-800" placeholder='Phone' required></input>
      
      <input type="email" name="email" 
      value={employee.email}
       onChange={(e)=>handleChange(e)}
      className="w-full py-2 my-4 text-slate-800" placeholder='Email' required></input>
    </div>

    <div className='flex my-4 space-x-4 px-20'>
      <button 
      onClick={(e)=>saveEmployee(e)}
      className='bg-green-400 hover:bg-green-700 py-2 px-6 rounded'>Save</button>
      
      <button
      onClick={(e)=>reset(e)}
       className='bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded'>Clear</button>
      
      {/* Onclick of cancel come to the home page */}
      <button
      onClick={()=>{navigate("/")}} 
      className='bg-red-400 hover:bg-red-700 py-2 px-6 rounded'>Cancel</button>
      </div>

    </div>
  )
}

export default AddEmployee
