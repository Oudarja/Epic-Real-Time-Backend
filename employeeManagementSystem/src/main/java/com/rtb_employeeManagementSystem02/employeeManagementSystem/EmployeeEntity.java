package com.rtb_employeeManagementSystem02.employeeManagementSystem;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Lombok is a Java library that helps reduce boilerplate
// code in Spring Boot applications (and Java applications in general).
// The @Data annotation is a convenient shortcut that combines 
// @Getter, @Setter, @ToString, @EqualsAndHashCode, and @RequiredArgsConstructor.
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "EmployeeTable")
public class EmployeeEntity {
    // The @Id annotation marks the id field as
    // the primary key of the entity.It is given
    // The @GeneratedValue annotation specifies how
    // the primary key value is generated. In your
    // case, GenerationType.IDENTITY means the database
    // will automatically generate a unique value for
    // the id field when a new record is inserted.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phone;
    private String email;

}
