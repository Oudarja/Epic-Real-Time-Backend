package com.rtb_employeeManagementSystem02.employeeManagementSystem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Here annotations are used to reduce the 
// boilerplate code using lombok
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Employee {
    private Long id;
    private String name;
    private String phone;
    private String email;

}
