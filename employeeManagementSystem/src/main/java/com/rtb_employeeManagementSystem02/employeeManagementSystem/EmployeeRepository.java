package com.rtb_employeeManagementSystem02.employeeManagementSystem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
JpaRepository is a part of Spring Data JPA, which is a framework
that simplifies database access in Spring applications. It provides
a set of standard methods for CRUD (Create, Read, Update, Delete) 
operations and more, allowing developers to interact with the 
database without needing to write boilerplate code.
*/

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {

}
