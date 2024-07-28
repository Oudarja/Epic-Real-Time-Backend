package com.rtb_employeeManagementSystem02.employeeManagementSystem;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    // employeeRepository in your service class is a
    // proxy object of the EmployeeRepository interface.
    /*
     * When you define an interface that extends
     * JpaRepository, Spring Data JPA creates a proxy implementation
     * of that interface at runtime. This proxy is a dynamic object
     * that implements the repository interface.
     * 
     * The proxy object can handle method calls made to the repository.
     * It delegates these calls to the actual implementation provided
     * by Spring Data JPA, which interacts with the database.
     * 
     */
    @Autowired
    private EmployeeRepository employeeRepository;

    // List<Employee> employees = new ArrayList<>();

    // All methods should have to be implemented using overriding
    @Override
    public String creatEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);

        employeeRepository.save(employeeEntity);

        // employees.add(employee);
        return "Saved Successfully";
    }

    @Override
    public List<Employee> readEmployees() {
        // if (employeeRepository == null) {
        // throw new IllegalStateException("EmployeeRepository is not initialized.");
        // }
        List<EmployeeEntity> employeesList = employeeRepository.findAll();

        List<Employee> employees = new ArrayList<>();

        for (EmployeeEntity employeeEntity : employeesList) {
            Employee emp = new Employee();
            emp.setName(employeeEntity.getName());
            emp.setEmail(employeeEntity.getEmail());
            emp.setPhone(employeeEntity.getPhone());
            emp.setId(employeeEntity.getId());
            employees.add(emp);
        }

        return employees;
    }

    @Override
    public Employee readEmployee(Long id) {
        EmployeeEntity emp = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        // copy from entity to model
        BeanUtils.copyProperties(emp, employee);
        return employee;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity emp = employeeRepository.findById(id).get();
        if (emp == null)
            return false;
        else {
            employeeRepository.delete(emp);
            return true;
        }
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeeEntity existingEmployee = employeeRepository.findById(id).get();

        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setName(employee.getName());
        existingEmployee.setPhone(employee.getPhone());

        employeeRepository.save(existingEmployee);

        return "Updated Successfully";
    }

}
