import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';
function App() {
  return (
    <>
    {/* This is full BrowserRoute under which several
     routes are defined 
    */}
    
    <BrowserRouter>
    {/* Navbar is constant so it is out of routes */}
     <Navbar/>
     <Routes>
     {/*  <EmployeeList/> is in default route and AddEmployee
          will be rendered when click is done on Add Employee button
     */}
     <Route path="/" element={<EmployeeList/>} />
     <Route path="/addEmployee" element={<AddEmployee/>} />
     <Route path="/editEmployee/:id" element={<UpdateEmployee/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
