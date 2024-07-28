package com.rtb_employeeManagementSystem02.employeeManagementSystem;

import java.util.*;

// All bussiness logic signature  are here not implementation 
public interface EmployeeService {

    String creatEmployee(Employee employee);

    List<Employee> readEmployees();

    boolean deleteEmployee(Long id);

    String updateEmployee(Long id, Employee employee);

    Employee readEmployee(Long id);

}
