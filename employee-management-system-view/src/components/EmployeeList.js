import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../Service/EmployeeService'
const EmployeeList = () => {
 
  // It will be filled automatically using hitting api from backend
  const[employees,setEmployees]=useState(null);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{

  const fetchData=async()=>{
    setLoading(true);
    try{
      const response=await EmployeeService.getEmployees();
      setEmployees(response.data);
    }catch(error)
    {
      console.log(error);
    }
    setLoading(false);
  };
  fetchData();
  },[]);

  const deleteEmployee=(e,id)=>{

    e.preventDefault();
      // employee has id,name,phone,email all data 
      // remember about handle change 
      EmployeeService.deleteEmployeeById(id)
      .then(()=>{
        // The id that has been passed with out this all 
        //  previous id element will be present in employees
        // through setEmployees function
        if(employees)
          {
         setEmployees((prevElement)=>{
          return prevElement.filter((employee)=>employee.id!==id)
         })
        }
      })
  };

  const editEmployee=(e,id)=>{
    
    e.preventDefault();

    navigate(`/editEmployee/${id}`);

  };


  const navigate=useNavigate();
  return (
    <div className="container mx-auto my-50">

    <div>
       <button
       onClick={()=>navigate("/addEmployee")} 
       className="bg-slate-600 hover:bg-blue-700 mx-20 my-10 font-semibold px-20 py-2 rounded">Add Employee</button>
    </div>

    <div className="mx-20">
       <table className="shadow">
        <thead className="bg-slate-600">
          <th className="px-6 py-3 uppercase tracking-wide">Name</th>
          <th className="px-6 py-3 uppercase tracking-wide">Phone</th>
          <th className="px-6 py-3 uppercase tracking-wide">Email</th>
          <th className="px-6 py-3 uppercase tracking-wide">Action</th>
        </thead>
        {!loading &&(
        <tbody>
        {employees.map((employee)=>(
        <tr className="hover:bg-white hover:text-black">
        <td className="text-left px-6 py-4 whitespace-nowarp">{employee.name}</td>
        <td className="text-left px-6 py-4 whitespace-nowarp">{employee.phone}</td>
        <td className="text-left px-6 py-4 whitespace-nowarp">{employee.email}</td>
        <td className="text-left px-6 py-4 whitespace-nowarp">
        <a 
        onClick={(e,id)=>editEmployee(e,employee.id)}
        class="hover:text-green-500 hover:cursor-pointer px-2"href="/">Edit
        </a>
        
        <a 
        onClick={(e,id)=>deleteEmployee(e,employee.id)}
        class="hover:text-red-500 hover:cursor-pointer px-2"href="/">Delete
        </a>
        </td>
        </tr>
        ))}
        </tbody>
      )}

       </table>

    </div>

    </div>
  )
}

export default EmployeeList
