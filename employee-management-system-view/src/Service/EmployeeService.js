// This class mainly communicate with backend to 
// store data on database through spring boot framework

//Axios is a popular JavaScript library used for making 
//HTTP requests. This will help to hit the following api 
// to different api different end point.
/*
It simplifies the process of sending requests to RESTful APIs. 
You can make GET, POST, PUT, DELETE, and other types of requests
easily.
Axios automatically transforms request and response data to 
JSON, making it easier to work with.
*/

// Employee (S)spring boot (API)api base url

import axios from 'axios'

const EMPLOYEE_S_SAPI_BASE_URL="http://localhost:9090/employees";

class EmployeeService
{
     saveEmployee(employee)
     {
        return axios.post(EMPLOYEE_S_SAPI_BASE_URL , employee);
     }

     getEmployees(){
       return axios.get(EMPLOYEE_S_SAPI_BASE_URL);
     }
     getEmployeeById(id){
       return axios.get(EMPLOYEE_S_SAPI_BASE_URL+"/"+id);
     }

     deleteEmployeeById(id){
      return axios.delete(EMPLOYEE_S_SAPI_BASE_URL+"/"+id);
     }

     updateEmployee(employee,id){
      return axios.put(EMPLOYEE_S_SAPI_BASE_URL+"/"+id,employee);
     }
}

// At the end of the code, export default new EmployeeService(); 
// creates an instance of EmployeeService and exports it.
//  This means that wherever you import this module, you are
//  getting that specific instance.
const employeeServiceInstance = new EmployeeService(); // Create instance

export default employeeServiceInstance; // Export the instance
